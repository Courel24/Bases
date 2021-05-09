import {getConnection} from "../server";

export const InicioPersonal = async (req: any) => {
    try{
        const databaseConnection = getConnection();
        const {cc, clave} = req.query;
        const databaseResponse  = await databaseConnection.query(`SELECT cargo FROM personal WHERE cc =  CAST(${cc} as VARCHAR) AND clave =  CAST('${clave}' as VARCHAR)`);
        if (databaseResponse.rows.length === 0){
            throw new Error("Error al iniciar sesión")
        }else {
            return {
                data: databaseResponse.rows
            }
        }
    }catch (err){
        return {
            error: "Error al iniciar sesión"
        }
    }
}