import {getConnection} from "../server";

export const GetExamenByName = async (req: any) => {
  try{
    const databaseConnection = getConnection();
    const {tipoexamen} =  req.query;
    const databaseResponse  = await databaseConnection.query(`SELECT idexamen, ccpaciente as CedulaPaciente,paciente.nombre as NombrePaciente, personal.nombre as NombrePersonal, tipoexamen.nombre as nombreExamen, fechatoma, resultado
    fROM examen INNER JOIN paciente ON (examen.ccpaciente=paciente.cc)
    INNER JOIN personal ON (examen.ccpersonal=personal.cc)
    INNER JOIN tipoexamen ON (examen.idtipoexamen=tipoexamen.idtipoexamen) WHERE tipoexamen.nombre = CAST('${tipoexamen}' as VARCHAR) order BY fechatoma DESC;`)
    return {
      data: databaseResponse.rows
    }
  }catch (err){
    console.log(err)
    return {
      error: "Error al obtener los examenes"
    }
  }
}
