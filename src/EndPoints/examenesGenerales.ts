import {getConnection} from "../server";

export const GetExamenesGenerales = async (_req: any) => {
  try{
    const databaseConnection = getConnection();
    const databaseResponse  = await databaseConnection.query(`SELECT idtipoexamen, nombre FROM tipoexamen;`)
    return {
      data: databaseResponse.rows
    }
  }catch (err){
    return {
      error: "Error al obtener los examenes"
    }
  }
}
