// const express=require('express');
// require('./db/conf');
// const User=require('./db/user');

// const app=express();

// app.post((req,resp)=>{
//     resp.send("api in progress")
// })
// app.listen(5101,()=>{
//     console.log("hello mobiloitte")
// })

// const express = require('express');
// require('./db/conf');
// const User = require('./db/user');

// const app = express();

// // Use app.post() instead of just post() to define a route handler for POST requests
// app.post('/', (req, res) => {
//     res.send("API in progress");
// });

// app.listen(7777, () => {
//     console.log("Hello Mobiloitte");
// });


const express = require('express');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/E-commerce", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB", error);
    });

// const User = require('./db/user');

const app = express();

// Use app.post() instead of just post() to define a route handler for POST requests
app.post('/', (req, res) => {
    res.send("API in progress");
});

app.listen(7777, () => {
    console.log("Hello Mobiloitte");
});
 require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    rollno: Number,
    password: String
});

module.exports = mongoose.model('User', userSchema);

