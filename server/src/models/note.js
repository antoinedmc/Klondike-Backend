import mongoose from 'mongoose';

const NoteSchema = mongoose.Schema({
    title: String,
    content: String
},
    {
        timestamps: true
    }
);

const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;