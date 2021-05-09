import {getConnection} from "../server";

export const EditarPaciente = async (req: any) => {
    const databaseConnection = getConnection();
    const {cc, celular, direccion} = req.query;
    try{
        await databaseConnection.query(`UPDATE paciente SET celular = CAST(${celular} as VARCHAR), direccion = CAST('${direccion}' as VARCHAR) WHERE cc = CAST(${cc} as VARCHAR)`)
        return {
        }
    }catch (err){
        return {
            error: "No se ha editado al usuario"
        }
    }
}