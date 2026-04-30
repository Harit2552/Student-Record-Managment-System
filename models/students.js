const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name : { 
        type : String,
        required : true
    },
    rollNumber : { 
        type : String,
        required : true,
        unique : true,
    },
    branch : { 
        type : String,
    },
    marks : {
        type : Number,
        min : 0,
        max : 100,
    },
    createdAt : {
        type : Date,
        default : Date.now,
    }
}, {timestamps:true})

const Student = mongoose.model("students", studentSchema);
module.exports = Student;