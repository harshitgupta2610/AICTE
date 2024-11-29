const mongoose = require("mongoose");



const userAdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

export const UserAdmin = mongoose.model("userAdmin",userAdminSchema);
