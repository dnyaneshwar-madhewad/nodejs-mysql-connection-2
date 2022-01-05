const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost", // location of the database.
  user: "root",
  password: "cdac",
  database: "insta",
};

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `INSERT INTO instagram (id,username, password) values (?,?, ?)`;
  connection.queryAsync(sql, [user.id, user.username, user.password]);
  console.log("Record Added!");

  await connection.endAsync();
};

const user = {id: "1", username: "DNY", password: "1234" };
addUser(user);