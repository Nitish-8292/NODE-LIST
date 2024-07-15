const express= require("express");

const app =express();
const cors = require ("cors");

require("./conn/conn.js");
const path =require("path");

const auth = require("./routes/auth.js");
const list = require("./routes/list.js");
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
  res.send("satish");
});


app.use("/api/v1", auth);
app.use("/api/v2", list);
app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});


app.listen(5000,()=>{
    console.log("server start");
});



