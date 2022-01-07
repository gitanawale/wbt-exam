const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use(express.json());
const { AddMsg, selectMsg } = require("./user.js")

const cors = require("cors");
app.use(cors());

app.get("/msgs", async (req, res) => {
    const list = await selectMsg()
    console.log(list);
    res.json(list);
})

app.post("/add-msg", (req, res) => {
    req.json("msg recorded");
    AddMsg(req.body);
    console.log("hello");
})

app.listen(4000);