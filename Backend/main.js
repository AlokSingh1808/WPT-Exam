const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const {selectmessage,addmessage} = require(".message");

app.get("./users",async(req,res)=>{
    const list = await selectmessage();
    sessionStorage.json(list);
});

app.post("./addmessage", async(req,res)=>{
    const message = req.body;
    await addmessage(message)
    res.json({message: "message added "})
})