const express = require("express");
const notes = require("./data/apiData");
const dotenv= require("dotenv")
const connectDb= require("./config/db")

const app = express();
dotenv.config();
connectDb();

app.get('/', (req, res) => {
    res.send("Api Is Runing....")
})

app.get("/api/notes", (req, res) =>{
    res.json(notes);
})

app.get("/api/notes/:id", (req, res) =>{
    const note = notes.find((n) => n.id === req.params.id);
    res.send(note);
})

const PORT= process.env.PORT || 5001;

app.listen(PORT, console.log(`Server Start with port ${PORT}`))