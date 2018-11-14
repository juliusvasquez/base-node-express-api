import {
  createLogger,
  format,
  transports
} from 'winston';

import appConfig from '../conf/appConfig';

const {
  combine,
  timestamp,
  prettyPrint
} = format;

const createTransports = (config) => {
  const customTransports = [];

  // setup the file transport
  if (config.access_log_file) {
    // setup the log transport
    customTransports.push(
      new transports.File({
        filename: config.access_log_file,
        level: config.level,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true
      })
    );
  }

  if (config.error_log_file) {
    // setup the log transport
    customTransports.push(
      new transports.File({
        filename: config.error_log_file,
        level: 'error',
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: true
      })
    );
  }

  // if config.console is set to true, a console logger will be included.
  if (config.console) {
    customTransports.push(
      new transports.Console({
        level: config.level
      })
    );
  }
  return customTransports;
};

const logger = createLogger({
  transports: createTransports(appConfig.logger),
  exitOnError: false, // do not exit on handled exceptions
  format: process.env.APP_ENV !== 'development' ? combine(timestamp(), prettyPrint()) : format.printf(info => `[${info.level}] ${new Date().toISOString()} - ${info.message}`)
});

// create a stream object with a 'write' function that will be used by `morgan`
logger.stream = {
  write (message) {
    // use the 'info' log level so the output
    // will be picked up by both transports (file and console)
    logger.info(message.substring(0, message.lastIndexOf('\n')));
  }
};

export default logger;
