const {query} = require ("../databese");

async function consulterTodos() {
    const sql = `SELET * FROM livro`;

const resultados = await query(sql)

    return resultados;
}
module.exports = {consulterTodos};
