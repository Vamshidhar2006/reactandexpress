const sessions = new Map();
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: 'Please login first'
        });
    }
    const user = sessions.get(token);

    if (!user) {
        return res.status(401).json({
            message: 'Invalid session'
        });
    }
    req.user = user;
    next();
};
module.exports = {
    sessions,
    authMiddleware
};