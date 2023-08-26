const express = require('express');
const router = express.Router();
const Note = require('../models/note');

// Create a new note
router.post('/notes', async (req, res) => {
    const { Email, Password } = req.body;

    try {
        const note = new Note({ Email, Password });
        await note.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(400).json({ message: 'Error creating note' });
    }
});

// Get all notes
router.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching notes' });
    }
});

// 
router.put('/notes/:id', async (req, res) => {
    const noteId = req.params.id;
    const updatedData = req.body; // Assuming your request body contains the updated data

    try {
        const updatedNote = await Note.findOneAndUpdate(
            { _id: noteId },
            { $set: updatedData },
            { new: true }
        );

        if (updatedNote) {
            res.json(updatedNote);
        } else {
            res.status(404).json({ message: 'Note not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating note' });
    }
});
// 


module.exports = router;
