import {getConnection} from "../server";

export const GetGananciaExamen = async (_req: any) => {
    try{
        const databaseConnection = getConnection();
        const databaseResponse  = await databaseConnection.query(`SELECT tipoExamen.nombre, SUM(tipoExamen.precio*paciente.tipoAfiliacion) AS ganancia FROM examen 
                                                                                INNER JOIN tipoExamen USING(idTipoExamen) INNER JOIN paciente ON examen.ccPaciente = paciente.cc 
                                                                                GROUP BY tipoExamen.nombre ORDER BY ganancia DESC;`)
        return {
            data: databaseResponse.rows
        }
    }catch (err){
        return {
            error: "Error al obtener la ganancia por examen"
        }
    }
}