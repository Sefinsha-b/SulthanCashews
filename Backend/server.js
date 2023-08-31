// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
const ApiRoutes = require('./routes/SignupApi');


// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello,s MEAN Stack!');
});
app.use('/Login', apiRoutes);

app.use('/Signup',ApiRoutes)


// /////////////////////////////////////////////


mongoose.connect('mongodb://127.0.0.1:27017/mean-stack-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// ///////////////////////////////////////////



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});