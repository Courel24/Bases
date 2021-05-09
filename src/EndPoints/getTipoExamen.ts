import {getConnection} from "../server";

export const GetTipoExamen = async (_req: any) => {
    try{
        const databaseConnection = getConnection();
        const databaseResponse  = await databaseConnection.query(`SELECT ex.nombre, ex.tiempoexamenenminutos, ex.tiempoentregaendias, 
                                                                                ex.precio, ex.recomendaciones, mu.nombre AS nombreMuestra 
                                                                                FROM tipoExamen AS ex INNER JOIN tipoMuestra AS mu USING(idTipoMuestra);`)
        return {
            data: databaseResponse.rows
        }
    }catch (err){
        return {
            error: "Error al obtener los tipos de examen"
        }
    }
}