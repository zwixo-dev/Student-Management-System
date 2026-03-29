import express from "express";
import { configDotenv } from "dotenv";


const app = express();

app.get("/",(req, res)=>{
    res.send("Hello World!");   
});


export default app;