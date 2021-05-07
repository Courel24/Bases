import {getConnection} from "../server";

export const ConsultarMuestra = async (req: any) => {
    try{
        const databaseConnection = getConnection();
        const {id} = req.query;
        const databaseResponse  = await databaseConnection.query(`SELECT * from muestra WHERE id = CAST(${id} as VARCHAR)`);
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