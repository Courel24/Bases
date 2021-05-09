import {getConnection} from "../server";

export const GetCantidadPaciente = async (_req: any) => {
    try{
        const databaseConnection = getConnection();
        const databaseResponse  = await databaseConnection.query(`SELECT ccPaciente, COUNT(*) AS numeroDeExamenes FROM examen GROUP BY ccPaciente 
                                                                                ORDER BY numeroDeExamenes DESC, ccPaciente;`)
        return {
            data: databaseResponse.rows
        }
    }catch (err){
        return {
            error: "Error al obtener la cantidad de examenes por paciente"
        }
    }
}