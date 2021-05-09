import {getConnection} from "../server";

export const CrearCita = async (req: any) => {
    const databaseConnection = getConnection();
    const {cc, fechaCita, idTipoExamen} = req.query;
    try{
        await databaseConnection.query(`INSERT INTO cita(ccPaciente, fechaCita, idTipoExamen) VALUES (CAST(${cc} as VARCHAR), CAST('${fechaCita}' as DATE), 
                                                        CAST(${idTipoExamen} as INT));`)
        return {
        }
    }catch (err){
        console.log(err)
        return {
            error: "No se ha creado la cita, los datos no son válidos"
        }
    }
}