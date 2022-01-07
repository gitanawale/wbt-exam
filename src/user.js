const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    port: 3307,
    user: "Gita",
    password: "cdac",
    database: "message"
}

const AddMsg = async (msg1) => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();

    let sql = `insert into MESSAGE(msg) values(?)`;
    await connection.queryAsync(sql, [msg1.msg]);


    await connection.endAsync();
}

const msg1 = { msg: "hello..how are you" }

const selectMsg = async () => {
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();

    let sql = `select * from MESSAGE `;
    const list = await connection.queryAsync(sql)
    await connection.endAsync();
    //console.log(list);
    return list
}
//AddMsg(msg1);
//selectMsg();

module.exports = { AddMsg, selectMsg }