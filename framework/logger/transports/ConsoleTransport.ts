import { ILogTransport } from '#framework/logger/interfaces/ILogTransport';
import { LogLevel } from '#framework/logger/types';

export class ConsoleTransport implements ILogTransport {
    async log(message: string, level: LogLevel): Promise<void> {
        const timestamp = new Date().toISOString();
        const formattedMessage = `[${timestamp}] [${level}] ${message}`;
        
        switch (level) {
            case LogLevel.ERROR:
                console.error(formattedMessage);
                break;
            case LogLevel.WARN:
                console.warn(formattedMessage);
                break;
            default:
                console.log(formattedMessage);
                break;
        }
    }
}
