import { add, capitalize, formatNumber, Logger, type LogLevel } from './index';
import { config } from './config';

console.log('sum(2.0 ok):', add([2, 3, 4]));
console.log('capitalize(typed):', capitalize('hello'));

console.log('format(ok):', formatNumber(123.456));

const logger = new Logger(config.LOG_LEVEL as LogLevel);
logger.info('Application started');
logger.debug('Extra debug info');
