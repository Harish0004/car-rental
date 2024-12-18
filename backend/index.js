import express from "express";
import mongoose from "mongoose";

const app = express();

const port = 5000;

mongoose.connect("mongodb://localhost:27017" ).then( () =>{
    console.log("database connected succesfully");
    app.listen(port,() =>{
        console.log(`server is running on ${port}`);
    })
} 
).catch((err) =>{
    console.log(err);
});

