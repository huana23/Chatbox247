const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator');
const jwt = require('jsonwebtoken');

const User = require('../users/user.model');
const OTP = require('../users/otp.model');
const { ConflictRequestError, NotFoundError, BadRequestError, AuthFailureError } = require('../../cores');
const { createAccessToken, createRefreshToken, verifyToken } = require('../../utils/jwt.util');
const { sendForgotPasswordEmail } = require('../../helpers/email.helper');

const setAuthCookies = (res, accessToken, refreshToken) => {
    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
        sameSite: 'Strict',
    });
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: 'Strict',
    });
    res.cookie('logged', '1', {
        httpOnly: false,
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: 'Strict',
    });
};

const clearAuthCookies = (res) => {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.clearCookie('logged');
};

const register = async ({ username, email, password }) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new ConflictRequestError('Email đã tồn tại');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    const accessToken = createAccessToken({ id: newUser._id });
    const refreshToken = createRefreshToken({ id: newUser._id });
    
    return { user: newUser, accessToken, refreshToken };
};

const login = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new NotFoundError('Tài khoản hoặc mật khẩu không đúng');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new AuthFailureError('Tài khoản hoặc mật khẩu không đúng');
    }

    const accessToken = createAccessToken({ id: user._id });
    const refreshToken = createRefreshToken({ id: user._id });

    return { user, accessToken, refreshToken };
};

const logout = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new NotFoundError('Người dùng không tồn tại');
    }
    return user;
};

const getCurrentUser = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
        throw new NotFoundError('Người dùng không tồn tại');
    }
    return user;
};

const refreshAccessToken = async (refreshToken) => {
    if (!refreshToken) {
        throw new AuthFailureError('Vui lòng đăng nhập lại');
    }

    try {
        const decoded = verifyToken(refreshToken);
        const accessToken = createAccessToken({ id: decoded.id });
        return { accessToken };
    } catch (error) {
        throw new AuthFailureError('Vui lòng đăng nhập lại');
    }
};

const requestForgotPassword = async (email) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new NotFoundError('Email không tồn tại');
    }

    const otp = otpGenerator.generate(6, {
        digits: true,
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
    });

    const tokenForgotPassword = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: '5m',
    });

    await OTP.create({
        email,
        otp,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    await sendForgotPasswordEmail(email, otp);

    return { tokenForgotPassword };
};

const verifyForgotPassword = async ({ token, otp, password }) => {
    if (!token || !otp) {
        throw new BadRequestError('Bạn đang thiếu thông tin');
    }

    let decoded;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        throw new BadRequestError('Vui lòng gửi lại yêu cầu');
    }

    const { email } = decoded;
    const otpRecord = await OTP.findOne({ email, otp });

    if (!otpRecord) {
        throw new BadRequestError('Mã OTP không hợp lệ');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.findOneAndUpdate({ email }, { password: hashedPassword });
    await OTP.deleteMany({ email });

    return true;
};

module.exports = {
    register,
    login,
    logout,
    getCurrentUser,
    refreshAccessToken,
    requestForgotPassword,
    verifyForgotPassword,
    setAuthCookies,
    clearAuthCookies,
};
