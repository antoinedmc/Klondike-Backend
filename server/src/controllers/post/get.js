import Post from '../../models/post';

const getPost = (req, res) => {
    const id = req.params.postId;

    // check if an id is passed
    if (id === undefined) {

        // return all the posts
        Post.find({}, (error, posts) => {
            if (error) return res.status(404).send('Internal error', error);

            return res.status(200).json({
                message: 'Posts retrieved successfully',
                data: posts
            });

        });
    }
    else {

        // return the specific post:id
        Post.findById(id, (error, post) => {
            if (error || !post) {
                console.log('erreur', error);
                return res.status(400).send('Post ' + id + ' not found');
            }

            return res.status(200).json({
                message: 'Post ' + id + ' retrieved successfully',
                data: post
            });
        });
    }

}

export default getPost;