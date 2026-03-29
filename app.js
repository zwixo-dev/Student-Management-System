import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: './.env' })

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static("public"));

app.get("/",(req, res)=>{
    res.send("Hello World!");   
});


export default app;