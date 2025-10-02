export const dbConfig = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'sasa1234',
  DB: 'db_dsw_contactbook',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
}