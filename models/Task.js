const mongoose = require('mongoose');

/* 
This line of code is creating a data schema for a "task" model using Mongoose, which is a Node.js library for data modeling and working with MongoDB databases. 
*/
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide name"],
        trim: true,
        maxlenght: [20, "name can not be more than 20 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Task", TaskSchema);


