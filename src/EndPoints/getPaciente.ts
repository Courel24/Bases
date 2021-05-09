import {getConnection} from "../server";

export const GetPaciente = async (req: any) => {
    try{
        const databaseConnection = getConnection();
        const {cc} = req.query;
        const databaseResponse  = await databaseConnection.query(`SELECT cc, nombre, apellido, celular, direccion, fechaNacimiento, idEps, 
                                                                                CASE WHEN tipoAfiliacion = 1 THEN 'C' WHEN tipoAfiliacion = 0.5 THEN 'B' ELSE 'A' END AS tipoAfiliacion, 
                                                                                CASE WHEN comorbilidad IS NOT NULL THEN comorbilidad ELSE 'No existe ninguna comorbilidad' END AS comorbilidad 
                                                                                from paciente WHERE cc = CAST(${cc} as VARCHAR);`)

            return {
                data: databaseResponse.rows
            }
    }catch (err){
        return {
            error: "Error al obtener el paciente"
        }
    }
}