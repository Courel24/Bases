import {getConnection} from "../server";

export const GetTipoExamenBox = async (_req: any) => {
    try{
        const databaseConnection = getConnection();
        const databaseResponse  = await databaseConnection.query(`SELECT idTipoExamen, nombre FROM tipoExamen;`)

        return {
            data: databaseResponse.rows
        }
    }catch (err){
        return {
            error: "Error al obtener los tipos de examen"
        }
    }
}