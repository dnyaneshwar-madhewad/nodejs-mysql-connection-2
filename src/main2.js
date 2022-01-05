const express = require("express");
const app = express();
const { selectAllUser } = require("./user5");//user means file name

// http://localhost:4000/users
app.get("/users", async (req, res) => {
  const list = await selectAllUser();
  res.json(list);
});


app.listen(4000, () => console.log("server started"));