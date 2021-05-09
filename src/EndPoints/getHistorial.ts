import {getConnection} from "../server";

export const GetHistorial = async (_req: any) => {
    try{
        const databaseConnection = getConnection();
        const databaseResponse  = await databaseConnection.query(`SELECT ccPaciente AS ccConsulta, idExamen, fechaConsulta FROM historialconsulta ORDER BY fechaConsulta DESC;`)
        return {
            data: databaseResponse.rows
        }
    }catch (err){
        return {
            error: "Error al obtener el historial de consultas"
        }
    }
}