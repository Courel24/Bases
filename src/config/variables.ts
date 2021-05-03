// docker run --name nona-Analytics-DB -e POSTGRES_PASSWORD=Patipuna1  -d -p 5432:5432 postgres

// Server port
export const CONFIG_SERVER_PORT = process.env.PORT || 3500;

// Database
export const CONFIG_DATABASE_URL =
  process.env.DATABASE_URL || 'postgres://postgres:proyecto1@192.168.1.114:5432/proyecto';