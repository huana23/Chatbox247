const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const path = require('path');

const OAuth2 = google.auth.OAuth2;

// ============================================
// EMAIL TEMPLATES
// ============================================

const EMAIL_TEMPLATES = {
  OTP: {
    subject: '[ChatBox247] Mã xác minh đặt lại mật khẩu',
    html: (otp, expiresIn) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">ChatBox247</h1>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #333; margin-top: 0;">Xác minh yêu cầu đặt lại mật khẩu</h2>
          <p style="color: #666; line-height: 1.6;">
            Chúng tôi đã nhận được yêu cầu đặt lại mật khẩu cho tài khoản của bạn.
          </p>
          <div style="background: white; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <p style="font-size: 14px; color: #666; margin: 0 0 10px 0;">Mã xác minh của bạn:</p>
            <p style="font-size: 32px; font-weight: bold; color: #667eea; margin: 0; letter-spacing: 8px;">
              ${otp}
            </p>
          </div>
          <p style="color: #666; line-height: 1.6;">
            Mã này sẽ hết hạn sau <strong>${expiresIn}</strong>.
          </p>
          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            Nếu bạn không yêu cầu đặt lại mật khẩu, vui lòng bỏ qua email này.
          </p>
        </div>
        <div style="padding: 20px; text-align: center; color: #999; font-size: 12px;">
          <p style="margin: 0;">© 2024 ChatBox247. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    `,
  },

  WELCOME: {
    subject: 'Chào mừng đến với ChatBox247',
    html: (fullName) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">ChatBox247</h1>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #333; margin-top: 0;">Chào mừng ${fullName}!</h2>
          <p style="color: #666; line-height: 1.6;">
            Cảm ơn bạn đã đăng ký ChatBox247. Chúng tôi rất vui được đồng hành cùng bạn!
          </p>
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #667eea; margin-top: 0;">Bạn có thể:</h3>
            <ul style="color: #666; line-height: 2;">
              <li>Tạo chatbot AI thông minh</li>
              <li>Tích hợp đa nền tảng (Zalo, Messenger, Website)</li>
              <li>Theo dõi và phân tích dữ liệu khách hàng</li>
              <li>Tự động hóa quy trình chăm sóc khách hàng</li>
            </ul>
          </div>
          <a href="#" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin-top: 20px;">
            Bắt đầu ngay
          </a>
        </div>
        <div style="padding: 20px; text-align: center; color: #999; font-size: 12px;">
          <p style="margin: 0;">© 2024 ChatBox247. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    `,
  },

  PASSWORD_CHANGED: {
    subject: '[ChatBox247] Mật khẩu đã được thay đổi',
    html: (fullName, changedAt) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0;">ChatBox247</h1>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
          <h2 style="color: #333; margin-top: 0;">Mật khẩu đã được thay đổi</h2>
          <p style="color: #666; line-height: 1.6;">
            Xin chào ${fullName},
          </p>
          <p style="color: #666; line-height: 1.6;">
            Mật khẩu của bạn đã được thay đổi vào lúc <strong>${changedAt}</strong>.
          </p>
          <p style="color: #999; font-size: 14px; margin-top: 30px;">
            Nếu bạn không thực hiện thay đổi này, vui lòng liên hệ với chúng tôi ngay.
          </p>
        </div>
        <div style="padding: 20px; text-align: center; color: #999; font-size: 12px;">
          <p style="margin: 0;">© 2024 ChatBox247. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    `,
  },
};

// ============================================
// EMAIL SERVICE CLASS
// ============================================

class EmailService {
  constructor() {
    this.transporter = null;
    this.oauth2Client = null;
    this.isConfigured = false;
  }

  /**
   * Initialize OAuth2 and create transporter
   */
  async initialize() {
    if (this.isConfigured) return;

    // Check if Google OAuth2 is configured
    if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
      console.warn('[EmailService] Google OAuth2 not configured. Email sending will be simulated.');
      this.isConfigured = false;
      return;
    }

    try {
      this.oauth2Client = new OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.GOOGLE_REDIRECT_URI
      );

      this.oauth2Client.setCredentials({
        refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
      });

      this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          type: 'OAuth2',
          user: process.env.EMAIL_FROM,
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        },
      });

      this.isConfigured = true;
      console.log('[EmailService] Initialized successfully with OAuth2');
    } catch (error) {
      console.error('[EmailService] Failed to initialize:', error.message);
      this.isConfigured = false;
    }
  }

  /**
   * Get access token from OAuth2
   */
  async getAccessToken() {
    if (!this.oauth2Client) {
      throw new Error('OAuth2 client not initialized');
    }

    const { credentials } = await this.oauth2Client.refreshAccessToken();
    return credentials.access_token;
  }

  /**
   * Send email
   */
  async sendEmail({ to, subject, html, text, attachments = [] }) {
    try {
      await this.initialize();

      if (!this.isConfigured || !this.transporter) {
        // Simulate email sending in development
        console.log('\n========== SIMULATED EMAIL ==========');
        console.log(`To: ${to}`);
        console.log(`Subject: ${subject}`);
        console.log('=======================================\n');
        return {
          success: true,
          simulated: true,
          messageId: `simulated_${Date.now()}`,
        };
      }

      const accessToken = await this.getAccessToken();

      const mailOptions = {
        from: `"${process.env.EMAIL_FROM_NAME || 'ChatBox247'}" <${process.env.EMAIL_FROM}>`,
        to,
        subject,
        html,
        text: text || this.htmlToText(html),
        attachments,
      };

      const result = await this.transporter.sendMail(mailOptions);

      console.log(`[EmailService] Email sent to ${to}: ${result.messageId}`);

      return {
        success: true,
        simulated: false,
        messageId: result.messageId,
      };
    } catch (error) {
      console.error(`[EmailService] Failed to send email to ${to}:`, error.message);
      throw error;
    }
  }

  /**
   * Send OTP email for password reset
   */
  async sendOtpEmail(email, otp) {
    const expiresIn = process.env.OTP_EXPIRES_IN || '5 phút';
    const template = EMAIL_TEMPLATES.OTP;

    return this.sendEmail({
      to: email,
      subject: template.subject,
      html: template.html(otp, expiresIn),
    });
  }

  /**
   * Send welcome email
   */
  async sendWelcomeEmail(email, fullName) {
    const template = EMAIL_TEMPLATES.WELCOME;

    return this.sendEmail({
      to: email,
      subject: template.subject,
      html: template.html(fullName),
    });
  }

  /**
   * Send password changed notification
   */
  async sendPasswordChangedEmail(email, fullName) {
    const template = EMAIL_TEMPLATES.PASSWORD_CHANGED;
    const changedAt = new Date().toLocaleString('vi-VN', {
      timeZone: 'Asia/Ho_Chi_Minh',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    return this.sendEmail({
      to: email,
      subject: template.subject,
      html: template.html(fullName, changedAt),
    });
  }

  /**
   * Convert HTML to plain text
   */
  htmlToText(html) {
    return html
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .trim();
  }
}

// Export singleton instance
module.exports = new EmailService();
