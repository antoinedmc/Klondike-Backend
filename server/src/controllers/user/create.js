import User from '../../models/user';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import Token from '../../middlewares/token';

const createUser = (req, res, next) => {

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



    // bcrypt.hash(req.body.password, 15, (err, hash) => {  // crash dans cette fonction

    //     if (err) console.log('erreur', err);

    //     console.log('PASSE DANS LE HASH');
    //     const password = hash;
    //     const user = new User({
    //         _id: new mongoose.Types.ObjectId(),
    //         username: req.body.username,
    //         password
    //     });

    //     user.save()
    //         .then(data => {
    //             res.send(data);
    //         })
    //         .catch(err => {
    //             console.log('erreur dans le user.save()');
    //             res.status(500).send({
    //                 message: err.message || 'Some error occured while creating the post'
    //             });
    //         });


    //     // check that user submit value
    //     if (!user.username || user.password) {
    //         return res.status(400).json({
    //             message: 'Please ensure you fill the username and password'
    //         });
    //     }

    //     // verify the user is not store in DB
    //     return User.count({
    //         $or: [
    //             { username: req.body.username }
    //         ]
    //     })
    //         .then((count) => {
    //             if (count > 0) {
    //                 res.status(401).json({
    //                     message: 'This user exists'
    //                 });
    //             }

    //             // if user doesnt exist, create one
    //             return user
    //                 .save()
    //                 .then((newUser) => {
    //                     const token = Token(newUser);
    //                     res.status(201).json({
    //                         message: 'User signup successfully',
    //                         newUser,
    //                         token
    //                     });
    //                 })
    //                 .catch(() => {
    //                     res.status(500).json({
    //                         message: 'Our server is in the locker room, please try again'
    //                     });
    //                 });
    //         });
    // });

};

export default createUser;