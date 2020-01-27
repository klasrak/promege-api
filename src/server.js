import app from './app';
import config from './config';
import logger from './logger';

const { api } = config;

async function startServer() {
  app.listen(api.port, err => {
    if (err) {
      logger.error(`Erro: ${err.message}`);
      process.exit(1);
    }
    logger.info(`Servidor rodando na porta ${api.port}`);
  });
}

startServer();
