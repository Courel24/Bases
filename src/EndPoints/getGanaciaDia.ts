import {getConnection} from "../server";

export const GetGanaciaDia = async (_req: any) => {
    try{
        const databaseConnection = getConnection();
        const databaseResponse  = await databaseConnection.query(`SELECT examen.fechaToma, SUM(tipoExamen.precio*paciente.tipoAfiliacion) AS ganancia FROM examen 
                                                                                INNER JOIN tipoExamen USING(idTipoExamen) INNER JOIN paciente ON examen.ccPaciente = paciente.cc 
                                                                                GROUP BY DATE(examen.fechaToma) ORDER BY DATE(fechaToma) DESC LIMIT 10;`)
        return {
            data: databaseResponse.rows
        }
    }catch (err){
        return {
            error: "Error al obtener la ganancia por dia"
        }
    }
}