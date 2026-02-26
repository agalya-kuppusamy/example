const express = require("express");
const app = express();
const port = 4000;
app.get("/addContent",async (req,res) => {
    res.send("Welcome to add content");
});
app.get("/posts",async (req,res) => {
  res.send("display posts");
});
//start server
app.listen(port, () => console.log(`Server running on port ${port}`)
);
