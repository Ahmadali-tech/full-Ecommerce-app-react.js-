const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/myproject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    number: String
});

const Contact = mongoose.model('Contact', ContactSchema);
app.post('/submit-form', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).send('Contact info saved');
    } catch (error) {
        res.status(400).send('Error saving contact info');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

