import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (!envFound) {
  throw new Error('Arquivo .env não encontrado');
}

export default {
  /**
   * API
   */
  api: {
    port: process.env.PORT,
    host: process.env.HOST,
    prefix: '/api/v1',
  },
  /**
   * Banco de dados
   */
  database: {
    postgre: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    },
  },
};
