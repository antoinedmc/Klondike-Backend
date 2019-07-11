import User from '../../models/user';

const getUser = (req, res) => {
    const id = req.params.userId;

    // check if an id is passed
    if (id === undefined) {

        // return all the users
        User.find({}, (error, users) => {
            if (error) {
                console.log('error', error);

                return res.status(404).send('Internal error');
            }

            return res.status(200).json({
                message: 'Users retrieved successfully',
                data: users
            });
        });
    }
    else {

        // return the specific user:id
        User.findById(id, (error, user) => {
            if (error || !post) {
                return res.status(400).send('User ' + id + ' not found');
            }

            return res.status(200).json({
                message: 'Post ' + id + ' retrieved successfully',
                data: user
            });
        });
    }

}

export default getUser;