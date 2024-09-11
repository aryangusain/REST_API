const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');
const User = require('./schema');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI;
app.use(express.json());
app.use(express.urlencoded({extended: false}));

mongoose.connect(MONGODB_URI, {dbName: 'REST_api'})
.then(() => {console.log('connected to database.')})
.catch(() => {console.log('could not connect to database.')});


/****************************** ROUTES *****************************/

//Get all Users
app.get('/api/users', async (req, res) => { 
    const users = await User.find();
    if(users.length > 0) {
        res.send(users);
    }
    else {
        res.send('No users exist.');
    }
})


//Create a new User
app.post('/api/users', async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if(!user) {
        const newUser = new User({
            email: req.body.email,
            fname: req.body.fname,
            lname: req.body.lname,
            gender: req.body.gender
        });
        
        newUser.save()
        .then(() => {res.send('User created successfully!')})
        .catch(() => {res.send('Failed to create user. Please try again!')})
    }
    else {
        res.send('User already exists. Please use a different email!');
    }
})


//Get a specific User
app.get('/api/users/:email', async (req, res) => {
    console.log(req.params.email);
    const user = await User.findOne({email: req.params.email});
    if(!user) {
        res.send('User does not exist!');
    }
    else {
        res.send(user);
    }
})


//Update a specific User
app.patch('/api/users/:email', async (req, res) => {
    const user = await User.findOne({email: req.params.email});
    if(!user) {
        res.send('User does not exist!');
    }
    else {
        if(req.body.newEmail != "") user.email = req.body.newEmail;
        if(req.body.fname != "") user.fname = req.body.fname;
        if(req.body.lname != "") user.lname = req.body.lname;
        await User.findOneAndUpdate({email: req.params.email}, user);
        res.send('User info successfully updated!');
    }
});


//Delete a specific User
app.delete('/api/users/:email', async (req, res) => {
    const user = await User.findOne({email: req.params.email});
    if(!user) {
        res.send('User does not exist!');
    }
    else {
        await User.findOneAndDelete({email: req.params.email});
        res.send('User info deleted successully!');
    }
})


/**********************************************************************/

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})