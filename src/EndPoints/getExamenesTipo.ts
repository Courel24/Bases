import {getConnection} from "../server";

export const GetExamenesTipo = async (_req: any) => {
    try{
        const databaseConnection = getConnection();
        const databaseResponse  = await databaseConnection.query(`SELECT tipo.nombre, COUNT(*) AS numeroDeExamenes FROM examen AS e 
                                                                                INNER JOIN tipoExamen AS tipo ON tipo.idTipoExamen = e.idTipoExamen 
                                                                                GROUP BY tipo.idTipoExamen ORDER BY numeroDeExamenes DESC, nombre;`)
        return {
            data: databaseResponse.rows
        }
    }catch (err){
        return {
            error: "Error al obtener el numero de examenes por tipo"
        }
    }
}