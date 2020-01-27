import winston from 'winston';

const transports = [];

if (process.env.NODE_ENV !== 'development') {
  transports.push(new winston.transports.Console());
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat()
      ),
    })
  );
}

const LoggerInstance = winston.createLogger({
  level: 'silly',
  levels: winston.config.npm.level,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'DD-MM-YYYY HH:mm:ss',
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports,
  exitOnError: false,
});

LoggerInstance.stream = {
  write: (message, encoding) => {
    LoggerInstance.info(message);
  },
};

export default LoggerInstance;
