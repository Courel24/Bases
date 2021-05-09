import {getConnection} from "../server";

export const GetPacientesAtendidos = async (_req: any) => {
    try{
        const databaseConnection = getConnection();
        const databaseResponse  = await databaseConnection.query(`SELECT 'Atendidos' AS estado, COUNT(DISTINCT ccPaciente) AS numero FROM examen
                                                                                UNION
                                                                                SELECT 'No atendidos' AS estado, (COUNT(*) - COUNT(DISTINCT examen.ccPaciente)) AS numero 
                                                                                FROM examen INNER JOIN paciente ON examen.ccPaciente = paciente.cc;`)
        return {
            data: databaseResponse.rows
        }
    }catch (err){
        return {
            error: "Error al obtener el numero de pacientes atendidos"
        }
    }
}