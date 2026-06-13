import { LogLevel } from '#framework/logger/types';

export interface ILogTransport {
    log(message: string, level: LogLevel): Promise<void>;
}
