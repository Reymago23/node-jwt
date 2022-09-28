const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const authenticationMiddleware = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization || !authorization.startsWith('Bearer ')) {
        throw new CustomAPIError('No authorization token received', 401)
    }
    const token = authorization.split(' ')[1]
    console.log("authenticationMiddleware token: " + token);
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decoded
        req.user = { id, username }
        console.log("authenticationMiddleware id: " + id + ", username: " + username);
        next()
    } catch (error) {
        console.log(error);
        throw new CustomAPIError('invalid authorization information', 401)
    }
}

module.exports = authenticationMiddleware