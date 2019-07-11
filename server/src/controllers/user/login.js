import User from '../../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const loginUser = (req, res) => {

    User.find({ username: req.body.username }).exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            // compare le password en clair de la requête et le password crypté save en db
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    });
                }
                // check password is ok --> result = true
                if (result) {
                    const token = jwt.sign(
                        {
                            username: user[0].username,
                            userId: user[0]._id
                        },
                        process.env.KEY,
                        {
                            expiresIn: '1h'
                        }
                    );
                    return res.status(200).json({
                        message: 'Auth successful',
                        token: token
                    });
                }
                // cas ou result == false --> pas le bon password
                res.status(401).json({
                    message: 'Auth failed'
                });
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

export default loginUser;