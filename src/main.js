const express = require("express");
const app = express();

// http://localhost:4000/users
// app.get("/users");
// app.get("/users", () => {});
app.get("/users", (req, res) => {
  let obj = { message: "Hello World" };
  res.json(obj);
});

app.listen(4000, () => console.log("server started"));