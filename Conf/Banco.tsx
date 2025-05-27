import * as  SQLite from 'expo-sqlite';

async function Conexao() {
    try {
        const db = await SQLite.openDatabaseAsync('PAM2');
        console.log('Banco Criado');
        return db;
    } catch (error) {
        console.log('erro ao criar o banco ' + error);
    }
}

//-------------------------------------------
async function createTable(db: SQLite.SQLiteDatabase) {
    try {
        await db.execAsync(
            ` PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS USUARIO(
           ID_US INTEGER PRIMARY KEY AUTOINCREMENT,
           NOME_US VARCHAR(100),
           EMAIL_US VARCHAR(100)
        )`
        );
        console.log('Tabela Criada !!!');

    } catch (erro) {
           console.log('Erro Tabela !!!');           
    }
}
// -------------------------------------------
// inserir dados na tabela

async function inserirUsuario(db: SQLite.SQLiteDatabase, name:string, email:string) {
  
    try {
          await  db.runAsync(
            " INSERT INTO USUARIO(NOME_US, EMAIL_US ) VALUES(? , ?) ", name, email
          );
          console.log("Inserido com sucesso");

    } catch (error) {
         console.log('Erro ao inserir usuario ' + error);
    }

}






// -------------------------------------------

// exebir todos os usuario

async function selectUsuario(db:SQLite.SQLiteDatabase) {
    try {
         const result = await db.getAllAsync("SELECT * FROM USUARIO");
         console.log(result);
         return result;
    } catch (error) {
        console.log('Erros ao bucar usuarios');
    }
}
// -------------------------------------------

// Filtrar usuario ID

 async function selectUsuarioId(db:SQLite.SQLiteDatabase, id:number) {
    try {
        
       const result = await db.getFirstAsync(' SELECT * FROM USUARIO WHERE ID_US = ?',id);
       console.log('Filtro de Usuario por ID ' + id );
       return result;

    } catch (error) {
         console.log('Erro ao buscar usuario ' + error);
    }

 }


// -------------------------------------------

export { Conexao, createTable, inserirUsuario, selectUsuario, selectUsuarioId};