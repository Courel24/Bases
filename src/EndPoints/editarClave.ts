import {getConnection} from "../server";

export const EditarClave = async (req: any) => {
    const databaseConnection = getConnection();
    const {cc, clave} = req.query;
    try{
        await databaseConnection.query(`UPDATE paciente SET clave = CAST('${clave}' as VARCHAR) WHERE cc = CAST(${cc} as VARCHAR)`)
        return {
        }
    }catch (err){
        return {
            error: "Error al cambiar la clave"
        }
    }
}