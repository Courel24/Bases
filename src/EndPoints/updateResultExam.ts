import {getConnection} from "../server";

export const UpdateResultExam = async (req: any) => {
  const databaseConnection = getConnection();
  const {resultado, idexamen} = req.query;
  try{
    await databaseConnection.query(`UPDATE examen SET resultado = CAST('${resultado}' as VARCHAR) WHERE idexamen = CAST(${idexamen} as INT)`)
    return {
    }
  }catch (err){
    console.log(err)

    return {
      error: "Error"
    }
  }
}
