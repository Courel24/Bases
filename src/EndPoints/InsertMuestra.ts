import {getConnection} from "../server";

export const InsertMuestra = async (req: any) => {
    const databaseConnection = getConnection();
    const {nombre} = req.query;
    try{
        await databaseConnection.query(`INSERT INTO tipomuestra (nombre) VALUES ('${nombre}') `);

    }catch (err){
        return {
            error:"Could not insert value"
        }
    }

    try{
        const databaseResponseQuery  = await databaseConnection.query(`Select * FROM tipomuestra WHERE nombre = '${nombre}'`);
        return {
            data: databaseResponseQuery.rows
        }
    }catch (err){
        return {
            error:"Could not insert value"
        }
    }
}