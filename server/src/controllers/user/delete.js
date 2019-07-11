import User from '../../models/user';

const deleteUser = (req, res) => {
    User.remove({ _id: req.params.userId }).exec()
        .then(result => {
            console.log('TEST');
            res.status(200).json({
                message: 'User ' + req.params.userId + ' deleted'
            });
        })
        .catch(err => {
            console.log('error', err);
            res.status(500).json({
                error: err
            });
        });
}

export default deleteUser;