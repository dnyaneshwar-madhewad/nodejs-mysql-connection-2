const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost", // location of the database.
  user: "root",
  password: "cdac",
  database: "day1",
};

const selectAllUser = async () => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  // let sql = `SELECT * FROM user`;
  // let sql = `SELECT * FROM user ORDER BY ID DESC`;

  let sql='SELECT * FROM user';
    const list=await connection.queryAsync(sql);
    console.log(list);
    await connection.endAsync();
  };

selectAllUser();
