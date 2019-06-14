import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
        collection: 'users'
    });

export default mongoose.model('User', UserSchema);