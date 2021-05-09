import {getConnection} from "../server";

export const GetExamenesDia = async (_req: any) => {
    try{
        const databaseConnection = getConnection();
        const databaseResponse  = await databaseConnection.query(`SELECT fechaToma AS dia, COUNT(*) AS numeroDeExamenes FROM examen GROUP BY DATE(fechaToma) ORDER BY fechaToma DESC;`)
        return {
            data: databaseResponse.rows
        }
    }catch (err){
        return {
            error: "Error al obtener el numero de examenes por dia"
        }
    }
}