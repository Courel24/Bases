import {getConnection} from "../server";

export const CrearPaciente = async (req: any) => {
    const databaseConnection = getConnection();
    const {cc, clave, nombre, apellido, genero, celular, direccion, fechaNacimiento, idEps, tipoAfiliacion, comorbilidad} = req.query;
    try{
        await databaseConnection.query(`INSERT INTO paciente(cc, clave, idEps, tipoAfiliacion, genero, nombre, apellido, celular, direccion, 
                                                        fechaNacimiento, fechaCreacion, fechaDesactivacion, comorbilidad) VALUES (CAST(${cc} as VARCHAR), CAST('${clave}' as VARCHAR), 
                                                        CAST(${idEps} as VARCHAR), CAST('${tipoAfiliacion}' as FLOAT), CAST('${genero}' as VARCHAR), CAST('${nombre}' as VARCHAR), CAST('${apellido}' as VARCHAR), 
                                                        CAST(${celular} as VARCHAR), CAST('${direccion}' as VARCHAR), CAST('${fechaNacimiento}' as DATE), 
                                                        CAST(current_date AS Date), NULL, CAST('${comorbilidad}' as VARCHAR));`)
        return {
        }
    }catch (err){
        return {
            error: "No se ha creado al usuario, los datos no son válidos"
        }
    }
}