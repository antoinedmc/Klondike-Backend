import Post from '../../models/post';

const deletePost = (req, res) => {

    Post.findByIdAndRemove(req.params.noteId)
        .then(post => {
            if (!post) {
                return res.status(404).send({
                    message: 'Post not found with id' + req.params.postId
                });
            }
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: 'Post not found with id ' + req.params.postId
                });
            }
            return res.status(500).send({
                message: 'Could not delete post with id ' + req.params.postId
            });
        });
};

export default deletePost;