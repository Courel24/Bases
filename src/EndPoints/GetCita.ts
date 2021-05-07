import {getConnection} from "../server";

export const GetCita = async (req: any) => {
    try{
        const databaseConnection = getConnection();
        const {UserCC} = req.query;
        const databaseResponse  = await databaseConnection.query(`SELECT * from paciente WHERE cc = CAST(${UserCC} as VARCHAR)`);
        console.log(databaseResponse);
        return {
            data: databaseResponse.rows
        }
    }catch (err){
        return {
            error: "error Getting User"
        }
    }
}