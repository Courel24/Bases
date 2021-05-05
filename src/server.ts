import express from 'express';
import { createServer } from 'http';
import getConnection from "@config/database";

export const server = express();
export const runServer = async () => {

  const httpServer = createServer(server);

  const connection = getConnection();

  const response = await connection.query("SELECT * from prueba")

  console.log(response.rows);

  server.get('/', (_req, res) => res.send('Servidor Bases de datos'));
  httpServer.listen(3500, () => {
    console.log(`Server Started at ${3500}`);
  });
};
