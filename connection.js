const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.cbucu.mongodb.net/mernchat?retryWrites=true&w=majority`, (e) => {
    console.log('Connected to MongoDB', e);    
})