import Post from '../../models/post';

const createPost = (req, res) => {

    //validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: 'Post content cannot be empty'
        });
    }

    // create a post
    const post = new Post({
        title: req.body.title || 'Untitled Post',
        content: req.body.content
    });

    // save post in the DB
    post.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occured while creating the post'
            });
        });
};

export default createPost;