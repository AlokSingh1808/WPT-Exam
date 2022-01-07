const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection"));

const dbinfo={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"project1"
}

async function addmessage(message){
    const connection=mysql.createConnection(dbinfo);
        await connection.connectAsync();
        let sql = 'insert into message(message) values(?)'
        await connection.queryAsync(sql,[message.message]);
        await connection.endAsync();
}

let message = {
    message:"My name is Alok"
}

async function selectmessage(){
    const connection=mysql.createConnection(dbinfo);
        await connection.connectAsync();
        let sql = 'select * from message'
        await connection.queryAsync(sql,[]);
        await connection.endAsync();
        console.log("message Displayed");

        return list;
}

//addmessege(message);

selectmessage();

module.exports={addmessage, selectmessage}

