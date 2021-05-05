import {Pool} from "pg";

var DatabaseConnection: undefined | Pool = undefined


const getConnection = (): Pool => {
  if (DatabaseConnection){
    return DatabaseConnection
  }

  DatabaseConnection =     new Pool({
    user: 'postgres',
    host: '192.168.1.114',
    database: 'new_entrega',
    password: 'proyecto1',
    port: 5432,
  })

  return DatabaseConnection;
}

export default getConnection;