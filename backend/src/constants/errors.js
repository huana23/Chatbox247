/*
|--------------------------------------------------------------------------
| Custom Error Messages
|--------------------------------------------------------------------------
|
| Centralized error messages for the application.
| This allows for easy maintenance and localization.
|
*/

const ErrorMessages = {
  // Auth Errors
  AUTH: {
    EMAIL_EXISTS: 'Email đã được sử dụng. Vui lòng sử dụng email khác.',
    EMAIL_NOT_FOUND: 'Email không tồn tại trong hệ thống.',
    INVALID_CREDENTIALS: 'Email hoặc mật khẩu không chính xác.',
    INVALID_PASSWORD: 'Mật khẩu hiện tại không chính xác.',
    WEAK_PASSWORD: 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.',
    PASSWORD_MISMATCH: 'Mật khẩu xác nhận không khớp.',
    INVALID_TOKEN: 'Token không hợp lệ hoặc đã hết hạn.',
    TOKEN_EXPIRED: 'Token đã hết hạn. Vui lòng đăng nhập lại.',
    REFRESH_TOKEN_EXPIRED: 'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.',
    REFRESH_TOKEN_INVALID: 'Refresh token không hợp lệ.',
    ACCOUNT_LOCKED: 'Tài khoản đã bị khóa. Vui lòng thử lại sau.',
    ACCOUNT_DISABLED: 'Tài khoản đã bị vô hiệu hóa.',
    EMAIL_NOT_VERIFIED: 'Email chưa được xác minh. Vui lòng kiểm tra hộp thư.',
    INVALID_OTP: 'Mã OTP không hợp lệ hoặc đã hết hạn.',
    OTP_EXPIRED: 'Mã OTP đã hết hạn. Vui lòng yêu cầu mã mới.',
    OTP_ALREADY_USED: 'Mã OTP đã được sử dụng.',
    OTP_SEND_FAILED: 'Không thể gửi mã OTP. Vui lòng thử lại.',
    TOO_MANY_OTP_REQUESTS: 'Bạn đã yêu cầu quá nhiều mã OTP. Vui lòng thử lại sau.',
    GOOGLE_AUTH_FAILED: 'Xác thực Google thất bại. Vui lòng thử lại.',
    LOGIN_ATTEMPTS_EXCEEDED: 'Bạn đã đăng nhập sai quá nhiều lần. Vui lòng thử lại sau.',
  },

  // User Errors
  USER: {
    NOT_FOUND: 'Người dùng không tồn tại.',
    ALREADY_EXISTS: 'Người dùng đã tồn tại.',
    UPDATE_FAILED: 'Không thể cập nhật thông tin người dùng.',
    DELETE_FAILED: 'Không thể xóa người dùng.',
    PROFILE_IMAGE_UPLOAD_FAILED: 'Không thể tải lên hình ảnh hồ sơ.',
    INVALID_USER_ID: 'ID người dùng không hợp lệ.',
  },

  // Validation Errors
  VALIDATION: {
    REQUIRED_FIELD: 'Trường này là bắt buộc.',
    INVALID_EMAIL: 'Email không hợp lệ.',
    INVALID_URL: 'URL không hợp lệ.',
    INVALID_PHONE: 'Số điện thoại không hợp lệ.',
    INVALID_FORMAT: 'Định dạng không hợp lệ.',
    TOO_SHORT: 'Giá trị quá ngắn. Tối thiểu {min} ký tự.',
    TOO_LONG: 'Giá trị quá dài. Tối đa {max} ký tự.',
    INVALID_LENGTH: 'Độ dài không hợp lệ. Yêu cầu {min}-{max} ký tự.',
    MIN_VALUE: 'Giá trị phải lớn hơn hoặc bằng {min}.',
    MAX_VALUE: 'Giá trị phải nhỏ hơn hoặc bằng {max}.',
    INVALID_ENUM: 'Giá trị không hợp lệ. Chọn một trong: {values}.',
    PASSWORD_TOO_WEAK: 'Mật khẩu quá yếu.',
  },

  // Resource Errors
  RESOURCE: {
    NOT_FOUND: 'Không tìm thấy tài nguyên.',
    ALREADY_EXISTS: 'Tài nguyên đã tồn tại.',
    CREATE_FAILED: 'Không thể tạo tài nguyên.',
    UPDATE_FAILED: 'Không thể cập nhật tài nguyên.',
    DELETE_FAILED: 'Không thể xóa tài nguyên.',
  },

  // File Upload Errors
  FILE: {
    REQUIRED: 'Vui lòng chọn file.',
    TOO_LARGE: 'File quá lớn. Kích thước tối đa: {maxSize}.',
    INVALID_TYPE: 'Loại file không hợp lệ. Chỉ chấp nhận: {types}.',
    UPLOAD_FAILED: 'Không thể tải lên file.',
    NOT_FOUND: 'File không tìm thấy.',
  },

  // Rate Limiting
  RATE_LIMIT: {
    TOO_MANY_REQUESTS: 'Quá nhiều yêu cầu. Vui lòng thử lại sau.',
    OTP_LIMIT: 'Bạn đã yêu cầu OTP quá nhiều lần. Vui lòng thử lại sau {minutes} phút.',
  },

  // Server Errors
  SERVER: {
    INTERNAL_ERROR: 'Đã xảy ra lỗi nội bộ. Vui lòng thử lại sau.',
    DATABASE_ERROR: 'Lỗi kết nối cơ sở dữ liệu.',
    SERVICE_UNAVAILABLE: 'Dịch vụ tạm thời không khả dụng.',
    MAINTENANCE: 'Hệ thống đang bảo trì. Vui lòng quay lại sau.',
  },

  // Common
  COMMON: {
    UNAUTHORIZED: 'Bạn không có quyền truy cập.',
    FORBIDDEN: 'Bạn không có quyền thực hiện hành động này.',
    NOT_FOUND: 'Không tìm thấy trang.',
    METHOD_NOT_ALLOWED: 'Phương thức không được phép.',
    BAD_REQUEST: 'Yêu cầu không hợp lệ.',
    CONFLICT: 'Xung đột dữ liệu.',
  },
};

module.exports = ErrorMessages;
