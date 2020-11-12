// importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("src/database/database.db.js")
module.exports = db
// utilizar o objeto de banco de dados, para nossas operações
db.serialize(() => {
    // com comandos SQL eu vou:

    // 1 criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             city TEXT,
//             state TEXT,
//             items TEXT
//         );
//     `)

//     // 2 inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             city,
//             state,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
// `

//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Nº 260",
//         "Rio do Sul",
//         "Santa Catarina",
//         "Lâmpadas"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso!")
//         console.log(this)
//     }
//    db.run(query, values, afterInsertData)

    // 3 consultar os dados da tabela
    // db.all(`SELECT name FROM places`, function(err, rows){
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Aqui estão os seus registros: ")
    //     console.log(rows)
    // })

    // 4 deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [], function(err){
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Registros deletados com sucesso!")
    // })

 })