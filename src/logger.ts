import * as winston from 'winston';

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
        }),
        new winston.transports.File({
            filename: "./logs/productListApi.log",
            level: 'info',
            handleExceptions: true,
        })
    ],
    exitOnError: false,
});

export default logger;