const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/StudentDB",
{
    useNewUrlParser: true,
},
(err) => {
    if(err) {
        console.log('Error in connecting to database');
    } else {
        console.log('Connected to database ' +err);
    }
})

require('./student.model');
