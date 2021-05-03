import { ConnectionOptions, createConnection } from 'typeorm';
import { CONFIG_DATABASE_URL } from './variables';

const config: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  url: CONFIG_DATABASE_URL,
  synchronize: true,
  logging: true,
  entities: [
    'src/entities/User.entity.ts',
    'src/entities/HospitalUser.entity.ts',
    'src/entities/Role.entity.ts',
    'src/entities/Appointment.entity.ts',
    'src/entities/ArterialGases.entity.ts',
    'src/entities/BloodExam.entity.ts',
    'src/entities/Bilirubin.entity.ts',
    'src/entities/Glucose.entity.ts',
    'src/entities/ExamTypes.entity.ts',
    'src/entities/ExamOrder.entity.ts',
  ],
};
export const getDBConfig = async () => await createConnection(config);
