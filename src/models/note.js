const mongoose = require('mongoose');

// DEFINE NOTE'S DB SCHEMA
const noteSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

// DEFINE NOTE MODEL WITH THE SCHEMA
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;

