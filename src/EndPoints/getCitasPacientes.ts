import {getConnection} from "../server";

export const GetCitasPacientes = async (req: any) => {
    try{
        const databaseConnection = getConnection();
        const {cc} = req.query;
        const databaseResponse  = await databaseConnection.query(`SELECT cita.idCita, tipoExamen.nombre, cita.fechaCita 
                                                                                FROM cita INNER JOIN tipoExamen USING(idTipoExamen) 
                                                                                WHERE ccPaciente = CAST(${cc} as VARCHAR) ORDER BY fechaCita DESC;`)

        return {
            data: databaseResponse.rows
        }
    }catch (err){
        console.log(err)
        return {
            error: "Error al obtener las citas"
        }
    }
}