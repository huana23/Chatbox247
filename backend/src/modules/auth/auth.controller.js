const { OK, Created } = require('../../cores');

const authService = require('./auth.service');

const register = async (req, res) => {
    const { username, email, password } = req.body;
    const result = await authService.register({ username, email, password });
    
    authService.setAuthCookies(res, result.accessToken, result.refreshToken);
    
    return new Created({
        message: 'Đăng ký thành công',
        metadata: result.user,
    }).send(res);
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const result = await authService.login({ email, password });
    
    authService.setAuthCookies(res, result.accessToken, result.refreshToken);
    
    return new OK({
        message: 'Đăng nhập thành công',
        metadata: { accessToken: result.accessToken, refreshToken: result.refreshToken },
    }).send(res);
};

const logout = async (req, res) => {
    await authService.logout(req.user);
    authService.clearAuthCookies(res);
    
    return new OK({
        message: 'Đăng xuất thành công',
        metadata: true,
    }).send(res);
};

const getCurrentUser = async (req, res) => {
    const user = await authService.getCurrentUser(req.user);
    
    return new OK({
        message: 'Xác thực thành công',
        metadata: user,
    }).send(res);
};

const refreshToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    const result = await authService.refreshAccessToken(refreshToken);
    
    res.cookie('accessToken', result.accessToken, {
        httpOnly: true,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'Strict',
    });
    
    return new OK({
        message: 'Refresh token thành công',
        metadata: true,
    }).send(res);
};

const forgotPassword = async (req, res) => {
    const { email } = req.body;
    const result = await authService.requestForgotPassword(email);
    
    res.cookie('tokenForgotPassword', result.tokenForgotPassword, {
        httpOnly: false,
        secure: true,
        maxAge: 5 * 60 * 1000,
        sameSite: 'Strict',
    });
    
    return new OK({
        message: 'Mã OTP đã được gửi đến email của bạn',
        metadata: { email },
    }).send(res);
};

const verifyForgotPassword = async (req, res) => {
    const { otp, password } = req.body;
    const tokenForgotPassword = req.cookies.tokenForgotPassword;
    
    await authService.verifyForgotPassword({
        token: tokenForgotPassword,
        otp,
        password,
    });
    
    res.clearCookie('tokenForgotPassword');
    
    return new OK({
        message: 'Khôi phục mật khẩu thành công',
        metadata: true,
    }).send(res);
};

module.exports = {
    register,
    login,
    logout,
    getCurrentUser,
    refreshToken,
    forgotPassword,
    verifyForgotPassword,
};
