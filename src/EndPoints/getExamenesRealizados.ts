import {getConnection} from "../server";

export const GetExamenesRealizados = async (req: any) => {
    try{
        const databaseConnection = getConnection();
        const {cc} = req.query;
        const databaseResponse  = await databaseConnection.query(`SELECT e.idExamen, pa.cc, CONCAT(pa.nombre, ' ', pa.apellido) AS nombrePaciente, 
                                                                                CONCAT(pe.nombre, ' ', pe.apellido) AS nombrePersonal, ti.nombre AS nombreExamen, e.fechaToma, resultado 
                                                                                FROM examen AS e INNER JOIN paciente AS pa ON e.ccPaciente = pa.cc 
                                                                                INNER JOIN tipoExamen AS ti ON ti.idTipoExamen = e.idTipoExamen 
                                                                                INNER JOIN personal AS pe ON pe.cc = e.ccPersonal WHERE pa.cc = CAST(${cc} as VARCHAR) 
                                                                                ORDER BY fechaToma DESC;`)

        return {
            data: databaseResponse.rows
        }
    }catch (err){
        console.log(err)
        return {
            error: "Error al obtener los examenes"
        }
    }
}