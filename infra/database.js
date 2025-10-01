const {Cliente, Client} = require("pg");


async function query(aql){
    const client = new Client({
        host: "",
        port: "",
        user: "",
        password: "",
    });
    await client.connect();

    const res = await client.query(aql, args);

    await client.end();
    return res.rows;
}
module.exports = { query };
