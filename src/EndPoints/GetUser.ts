import {getConnection} from "../server";


export const GetUser = async (_req: any) => {
    try{
        const databaseConnection = getConnection();
        const databaseResponse  = await databaseConnection.query("SELECT * from cita");
        console.log(databaseResponse);
        return {
            message: "holi del server"
        }
    }catch (err){
        return {
            messsage: "error"
        }
    }
}