import {getConnection} from "../server";

export const InicioPaciente = async (req: any) => {
    try{
        const databaseConnection = getConnection();
        const {cc, clave} = req.query;
        const databaseResponse  = await databaseConnection.query(`SELECT cc FROM paciente WHERE cc =  CAST(${cc} as VARCHAR) AND clave =  CAST('${clave}' as VARCHAR)`);
        if (databaseResponse.rows.length === 0){
            throw new Error("Error al iniciar sesión")
        }else {
            return {
                data: databaseResponse.rows
            }
        }
    }catch (err){
        return {
            message: "Error al iniciar sesión"
        }
    }
}