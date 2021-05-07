import express from 'express';
import { createServer } from 'http';
import {Pool} from "pg";
import {GetUser} from "./EndPoints/GetUser";
import {GetCita} from "./EndPoints/GetCita";
import {InsertMuestra} from "./EndPoints/InsertMuestra";

let DatabaseConnection: undefined | Pool = undefined


export const getConnection = (): Pool => {
  if (DatabaseConnection){
    return DatabaseConnection
  }

  DatabaseConnection = new Pool({
    user: 'postgres',
    host: '192.168.1.114',
    database: 'lab',
    password: 'proyecto1',
    port: 5432,
  })

  return DatabaseConnection;
}

export const server = express();
export const runServer = async () => {

  const httpServer = createServer(server);

  server.get('/',
      (_req, res) => res.send('Servidor Bases de datos')
  );

  server.get('/get-user',
      async (req, res) => {
        const response = await GetUser(req);
        return res.send(response);
      }
  );

  server.get('/consultar-muestra',
      async (req, res) => {
        const response = await GetUser(req);
        return res.send(response);
      }
  );

  server.get('/consultar-paciente',
      async (req, res) => {
        const response = await GetUser(req);
        return res.send(response);
      }
  );

  server.get('/get-cita',
      async (req, res) => {
        const response = await GetCita(req);
        return res.send(response);
      }
  );

  server.get('/tipo-muestra-cita',
      async (req, res) => {
        const response = await InsertMuestra(req);
        return res.send(response);
      }
  );


  httpServer.listen(3500, () => {
    console.log(`Server Started at ${3500}`);
  });
};
