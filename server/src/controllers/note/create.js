import Note from '../../models/note';

const createNote = (req, res) => {
    //validate request
    if (!req.body.content) {
        return res.status(400).send({
            message: "Note content cannot be empty create"
        });
    }

    // Create a Note
    const note = new Note({
        title: req.body.title || "Untitled Note",
        content: req.body.content
    });

    // save note in the DB
    note.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating the note."
            });
        });
};

export default createNote;

