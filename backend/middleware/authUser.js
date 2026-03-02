const {AuthFailureError} = require('../core/error.response');
const {verifyToken} = require('../auth/checkAuth');

const authUser = async(req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken;

        if(!accessToken) {
            throw new AuthFailureError('Vui lòng đăng nhập để tiếp tục');
        }

        const decoded = await verifyToken(accessToken);
        if(!decoded) {
            throw new AuthFailureError('Vui lòng đăng nhập để tiếp tục');
        }
        req.user = decoded.id;
        next();
    }
    catch (error) {
        throw new AuthFailureError('Vui lòng đăng nhập để tiếp tục');
    }

}

module.exports = {authUser};