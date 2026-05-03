const { asyncHandler } = require('../middlewares/asyncHandler.middleware');
const jwt = require('jsonwebtoken');
const { AuthFailureError } = require('../cores');

const authUser = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken;

        if (!accessToken) {
            throw new AuthFailureError('Vui lòng đăng nhập để tiếp tục');
        }

        const decoded = await verifyToken(accessToken);
        if (!decoded) {
            throw new AuthFailureError('Vui lòng đăng nhập để tiếp tục');
        }
        
        req.user = decoded.id;
        next();
    } catch (error) {
        if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
            throw new AuthFailureError('Token không hợp lệ hoặc đã hết hạn');
        }
        throw error;
    }
};

const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { authUser };
