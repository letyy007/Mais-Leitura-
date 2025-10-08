const {Cliente, Client} = require("pg");


async function query(sql, args=[]){
    const client = new Client({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        database: process.env.DB.NAME,
        password: process.env.DB_PASSWORD,
    });
    await client.connect();

    const res = await client.query(sql, args);

    await client.end();
    return res.rows;
}
module.exports = { query };