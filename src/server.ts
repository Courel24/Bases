import express from 'express';
import { createServer } from 'http';
import {Pool} from "pg";
import {InicioPaciente} from "./EndPoints/inicioPaciente";
import {InicioPersonal} from "./EndPoints/inicioPersonal";
import {GetPaciente} from "./EndPoints/getPaciente";
import {EditarClave} from "./EndPoints/editarClave";
import {EditarPaciente} from "./EndPoints/editarPaciente";
import {GetExamenesRealizados} from "./EndPoints/getExamenesRealizados";
import {GetCitasPacientes} from "./EndPoints/getCitasPacientes";
import {GetPacienteCompleto} from "./EndPoints/getPacienteCompleto";
import {EditarPacienteCompleto} from "./EndPoints/editarPacienteCompleto";
import {CrearPaciente} from "./EndPoints/crearPaciente";
import {GetTipoExamen} from "./EndPoints/getTipoExamen";
import {GetTipoExamenBox} from "./EndPoints/getTipoExamenBox";
import {CrearCita} from "./EndPoints/crearCita";
import cors from "cors"

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
    server.use(cors());

    server.get('/',
      (_req, res) => res.send('Servidor Bases de datos')
  );

    server.get('/inicio-paciente',
        async (req, res) => {
            const response = await InicioPaciente(req);
            return res.send(response);
        }
    );

    server.get('/inicio-personal',
        async (req, res) => {
            const response = await InicioPersonal(req);
            return res.send(response);
        }
    );

    server.get('/get-paciente',
        async (req, res) => {
            const response = await GetPaciente(req);
            return res.send(response);
        }
    );

    server.get('/editar-clave',
        async (req, res) => {
            const response = await EditarClave(req);
            return res.send(response);
        }
    );

    server.get('/editar-paciente',
        async (req, res) => {
            const response = await EditarPaciente(req);
            return res.send(response);
        }
    );

    server.get('/get-examenes-realizados',
        async (req, res) => {
            const response = await GetExamenesRealizados(req);
            return res.send(response);
        }
    );

    server.get('/get-citas-pacientes',
        async (req, res) => {
            const response = await GetCitasPacientes(req);
            return res.send(response);
        }
    );

    server.get('/get-paciente-completo',
        async (req, res) => {
            const response = await GetPacienteCompleto(req);
            return res.send(response);
        }
    );

    server.get('/editar-paciente-completo',
        async (req, res) => {
            const response = await EditarPacienteCompleto(req);
            return res.send(response);
        }
    );

    server.get('/crear-paciente',
        async (req, res) => {
            const response = await CrearPaciente(req);
            return res.send(response);
        }
    );

    server.get('/get-tipo-examen',
        async (req, res) => {
            const response = await GetTipoExamen(req);
            return res.send(response);
        }
    );

    server.get('/get-tipo-examen-box',
        async (req, res) => {
            const response = await GetTipoExamenBox(req);
            return res.send(response);
        }
    );

    server.get('/crear-cita',
        async (req, res) => {
            const response = await CrearCita(req);
            return res.send(response);
        }
    );

  httpServer.listen(3500, () => {
    console.log(`Server Started at ${3500}`);
  });
};
