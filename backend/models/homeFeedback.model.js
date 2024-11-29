const mongoose = require("mongoose");

const newFeedback = new mongoose.Schema({
    username: {type: String},
    email: {type: String},
    subject: {type: String,required: true},
    message: {type: String,required: true},
},{timestamps: true});

export const Feedback = mongoose.model("Feedback",newFeedback);
