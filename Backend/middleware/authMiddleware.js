import jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret_key';

export const protect = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).send('No token, authorization denied');
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded.userId;
        next();
    } catch (error) {
        res.status(401).send('Token is not valid');
    }
};