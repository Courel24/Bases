import {getConnection} from "../server";

export const GetResultados = async (req: any) => {
    try{
        const databaseConnection = getConnection();
        const {idExamen, ccPaciente} = req.query;
        if (idExamen){
            const databaseResponse  = await databaseConnection.query(`SELECT idExamen, ccPaciente, resultado FROM examen WHERE idExamen = ${idExamen}`);
            return {
                data: databaseResponse.rows
            }
        }

        if (ccPaciente){
            const databaseResponse  = await databaseConnection.query(`SELECT idExamen, ccPaciente, resultado FROM examen WHERE ccPaciente = ${ccPaciente}`);
            return {
                data: databaseResponse.rows
            }
        }

        throw new Error("Error getting results");

    }catch (err){
        return {
            error: err.message
        }
    }
}