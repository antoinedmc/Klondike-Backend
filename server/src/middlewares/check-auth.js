import jwt from 'jsonwebtoken';

const checkAuth = (req, res, next) => {
    console.log('TEST');
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log('token', token);
        const decoded = jwt.verify(token, process.env.KEY);
        req.userData = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
}

export default checkAuth;