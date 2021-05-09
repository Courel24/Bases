import {getConnection} from "../server";

export const EditarPacienteCompleto = async (req: any) => {
    const databaseConnection = getConnection();
    const {cc, clave, nombre, apellido, genero, celular, direccion, fechaNacimiento, idEps, comorbilidad, fechaDesactivacion} = req.query;
    try{
        await databaseConnection.query(`UPDATE paciente SET cc = CAST(${cc} as VARCHAR), clave = CAST('${clave}' as VARCHAR), nombre = CAST('${nombre}' as VARCHAR), 
                                                        apellido = CAST('${apellido}' as VARCHAR), genero = CAST('${genero}' as VARCHAR), celular = CAST(${celular} as VARCHAR), 
                                                        direccion = CAST('${direccion}' as VARCHAR), fechaNacimiento = CAST('${fechaNacimiento}' as DATE), idEps = CAST(${idEps} as VARCHAR), 
                                                        comorbilidad = CAST('${comorbilidad}' as VARCHAR), fechaDesactivacion = CAST('${fechaDesactivacion}' as DATE) 
                                                        WHERE cc = CAST(${cc} as VARCHAR);`)
        return {
        }
    }catch (err){
        return {
            error: "No se ha editado al usuario, los datos no son válidos"
        }
    }
}