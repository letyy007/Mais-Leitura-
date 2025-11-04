const { query} = require("../databese");

async function consulterTodos() {
    const sql = `SELET * FROM livro`;

    const reusltados = await query(sql)

    return reusltatodos;

}
module.exports ={ consulterTodos};
