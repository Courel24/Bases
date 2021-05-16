import {getConnection} from "../server";

export const GetExamenDate = async (req: any) => {
  try{
    const databaseConnection = getConnection();
    const {fechatoma} =  req.query;
    const databaseResponse  = await databaseConnection.query(`select idexamen, ccpaciente as CedulaPaciente,paciente.nombre as NombrePaciente, personal.nombre as NombrePersonal, tipoexamen.nombre as nombreExamen, fechatoma, resultado
    FROM examen INNER JOIN paciente ON (examen.ccpaciente=paciente.cc)
    INNER JOIN personal ON (examen.ccpersonal=personal.cc)
    INNER JOIN tipoexamen ON (examen.idtipoexamen=tipoexamen.idtipoexamen) WHERE fechatoma =  TO_DATE ('${fechatoma}', 'YYYY-MM-DD') ORDER BY fechatoma DESC;`)
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
