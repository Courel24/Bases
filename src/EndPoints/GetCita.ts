import {getConnection} from "../server";

export const GetCita = async (req: any) => {
    try{
        const databaseConnection = getConnection();
        const {UserCC, llave2} = req.query;
        console.log(llave2)
        const databaseResponse  = await databaseConnection.query(`SELECT * from paciente WHERE cc = CAST(${UserCC} as VARCHAR)`);
        return {
            data: databaseResponse.rows
        }
    }catch (err){
        return {
            error: "error Getting User"
        }
    }
}