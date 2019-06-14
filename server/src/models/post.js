import mongoose from 'mongoose';

const PostSchema = mongoose.Schema({
    title: String,
    content: String
},
    {
        timestamps: true
    }
);

const PostModel = mongoose.model('Post', PostSchema);

export default PostModel;