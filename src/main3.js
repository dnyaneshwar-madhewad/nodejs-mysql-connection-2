const express = require("express");
const app = express();

const { selectAllUser } = require("./user");

// http://localhost:4000/users
app.get("/users", async (req, res) => {
  const list = await selectAllUser();
  res.json(list);
});

// http://localhost:4000/hello
app.get("/hello", (req, res) => {
  res.json({ message: "hellooo" });
});

app.listen(4000, () => console.log("server started"));