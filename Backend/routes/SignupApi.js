const express = require('express');
const router = express.Router();
const SignUp = require('../models/SignSchema');

// Create a new signup
router.post('/signin', async (req, res) => {
    const { PhoneNumber, Email, Password } = req.body;

    try {
        const signup = new SignUp({ PhoneNumber, Email, Password });
        await signup.save();
        res.status(201).json(signup); // Return the saved signup object
    } catch (error) {
        res.status(400).json({ message: 'Error creating signup' });
    }
});

// Get all signups
router.get('/signin', async (req, res) => {
    try {
        const signups = await SignUp.find();
        res.json(signups);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching signups' });
    }
});

// Update a signup
router.put('/signin/:id', async (req, res) => {
    const signupId = req.params.id;
    const updatedData = req.body;

    try {
        const updatedSignUp = await SignUp.findOneAndUpdate(
            { _id: signupId },
            { $set: updatedData },
            { new: true }
        );

        if (updatedSignUp) {
            res.json(updatedSignUp);
        } else {
            res.status(404).json({ message: 'Signup not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating signup' });
    }
});

module.exports = router;
