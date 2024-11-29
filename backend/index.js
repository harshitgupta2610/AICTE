import express from "express";
import connectDB from "./utils/db.js";
const app = express();



const PORT  = process.env.PORT || 3000;

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running on port ${PORT}`);
})
