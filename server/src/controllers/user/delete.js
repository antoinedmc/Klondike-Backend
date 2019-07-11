import User from '../../models/user';

const deleteUser = (req, res) => {
    User.remove({ _id: req.params.userId }).exec()
        .then(result => {
            res.status(200).json({
                message: 'User ' + req.params.userId + ' deleted'
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

export default deleteUser;