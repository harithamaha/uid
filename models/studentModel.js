
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    regId: String,
    name: String,
    gender: String,
    course: String,
    department: String,
    year: Number,

   

    section:{
        type: String,
        default: "A"
    },
    phoneno:String,
    pphoneno:String,
    emailid:String,
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;