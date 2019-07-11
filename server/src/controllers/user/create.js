import User from '../../models/user';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import Token from '../../middlewares/token';

const createUser = (req, res, next) => {

    User.find({ username: req.body.username })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(400).json({
                    message: 'This username already exists'
                });
            }
            else {
                bcrypt.hash(req.body.password, 10, (err, hashPassword) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    }
                    else {
                        const user = new User({
                            username: req.body.username,
                            password: hashPassword
                        });
                        user.save()
                            .then(result => {
                                console.log('result', result);
                                res.status(201).json({
                                    message: 'User created'
                                });
                            })
                            .catch(err => {
                                res.status(500).json({
                                    error: err
                                });
                            });
                    }
                });
            }
        });

};

export default createUser;