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
import { GetExamenesGenerales } from './EndPoints/examenesGenerales';
import { GetExamenByName } from './EndPoints/getExamenByName';
import { GetExamenSinResultado } from './EndPoints/getExamenSinResultado';
/*import {GetUser} from "./EndPoints/GetUser";
import {GetCita} from "./EndPoints/GetCita";
import {InsertMuestra} from "./EndPoints/InsertMuestra";*/
import {GetHistorial} from "./EndPoints/getHistorial";
import {GetExamenesDia} from "./EndPoints/getExamenesDia";
import {GetExamenesTipo} from "./EndPoints/getExamenesTipo";
import {GetPacientesAtendidos} from "./EndPoints/getPacientesAtendidos";
import {GetCantidadPaciente} from "./EndPoints/getCantidadPaciente";
import {GetGanaciaDia} from "./EndPoints/getGanaciaDia";
import {GetGananciaExamen} from "./EndPoints/getGananciaExamen";
import {GetExamenesLab} from "./EndPoints/getExamenesLab";
import {GetExamenDate} from "./EndPoints/getExamenDate";
import cors from "cors"
import { UpdateResultExam } from './EndPoints/updateResultExam';

let DatabaseConnection: undefined | Pool = undefined


export const getConnection = (): Pool => {
  if (DatabaseConnection){
    return DatabaseConnection
  }

  DatabaseConnection = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'lab',
    password: '1234',
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

  /*server.get('/get-user',
      async (req, res) => {
        const response = await GetUser(req);
        return res.send(response);
      }
  );*/

  /*server.get('/consultar-muestra',
      async (req, res) => {
        const response = await GetUser(req);
        return res.send(response);
      }
  );*/

  /*server.get('/consultar-paciente',
      async (req, res) => {
        const response = await GetUser(req);
        return res.send(response);
      }
  );*/

  /*server.get('/get-cita',
      async (req, res) => {
        const response = await GetCita(req);
        return res.send(response);
      }
  );*/

  /*server.get('/tipo-muestra-cita',
      async (req, res) => {
        const response = await InsertMuestra(req);
        return res.send(response);
      }
  );*/
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
  server.get('/crear-paciente',
    async (req, res) => {
      const response = await CrearPaciente(req);
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
  server.get('/editar-resultado-examen',
    async (req, res) => {
      const response = await UpdateResultExam(req);
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


  server.get('/get-historial',
    async (req, res) => {
      const response = await GetHistorial(req);
      return res.send(response);
    }
  );


    server.get('/get-historial',
        async (req, res) => {
            const response = await GetHistorial(req);
            return res.send(response);
        }
    );
  server.get('/get-examenes-generales',
    async (req, res) => {
      const response = await GetExamenesGenerales(req);
      return res.send(response);
    }
  );
  server.get('/get-examen-sin-resultado',
    async (req, res) => {
      const response = await GetExamenSinResultado(req);
      return res.send(response);
    }
  );


  server.get('/get-examen-date',
    async (req, res) => {
      const response = await GetExamenDate(req);
      return res.send(response);
    }
  );
  server.get('/get-examen-nombre',
    async (req, res) => {
      const response = await GetExamenByName(req);
      return res.send(response);
    }
  );


  server.get('/get-examenes-dia',
        async (req, res) => {
            const response = await GetExamenesDia(req);
            return res.send(response);
        }
    );

    server.get('/get-examenes-tipo',
        async (req, res) => {
            const response = await GetExamenesTipo(req);
            return res.send(response);
        }
    );

    server.get('/get-pacientes-atendidos',
        async (req, res) => {
            const response = await GetPacientesAtendidos(req);
            return res.send(response);
        }
    );
  server.get('/get-examenes-lab',
    async (req, res) => {
      const response = await GetExamenesLab(req);
      return res.send(response);
    }
  );
    server.get('/get-cantidad-paciente',
        async (req, res) => {
            const response = await GetCantidadPaciente(req);
            return res.send(response);
        }
    );

    server.get('/get-ganancia-dia',
        async (req, res) => {
            const response = await GetGanaciaDia(req);
            return res.send(response);
        }
    );

    server.get('/get-ganancia-examen',
        async (req, res) => {
            const response = await GetGananciaExamen(req);
            return res.send(response);
        }
    );

  httpServer.listen(3500, () => {
    console.log(`Server Started at ${3500}`);
  });
};
