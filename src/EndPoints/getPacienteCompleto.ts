import {getConnection} from "../server";

export const GetPacienteCompleto = async (req: any) => {
    try{
        const databaseConnection = getConnection();
        const {cc} = req.query;
        const databaseResponse  = await databaseConnection.query(`SELECT cc, clave, nombre, apellido, genero, celular, direccion, fechaNacimiento, idEps,
                                                                                CASE WHEN comorbilidad IS NOT NULL THEN comorbilidad ELSE 'No existe ninguna comorbilidad' END AS comorbilidad,
                                                                                fechaDesactivacion from paciente WHERE cc = CAST(${cc} as VARCHAR);`);

        return {
            data: databaseResponse.rows
        }
    }catch (err){
        return {
            error: "Error al obtener el paciente"
        }
    }
}