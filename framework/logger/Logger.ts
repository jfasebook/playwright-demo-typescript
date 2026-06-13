import { ILogTransport } from '#framework/logger/interfaces/ILogTransport';
import { LogLevel, LoggerOptions, LogDestination } from '#framework/logger/types';
import { ConsoleTransport } from '#framework/logger/transports/ConsoleTransport';
import { FileTransport } from '#framework/logger/transports/FileTransport';

export class Logger {
    private transports: ILogTransport[] = [];
    private readonly minLevel: LogLevel;

    constructor(options: LoggerOptions = {}) {
        const destination = options.destination || LogDestination.SCREEN;
        this.minLevel = options.level || LogLevel.INFO;

        if (destination === LogDestination.SCREEN || destination === LogDestination.BOTH) {
            this.transports.push(new ConsoleTransport());
        }

        if (destination === LogDestination.FILE || destination === LogDestination.BOTH) {
            const filePath = options.logFilePath || 'logs/app.log';
            this.transports.push(new FileTransport(filePath));
        }
    }

    private async log(message: string, level: LogLevel): Promise<void> {
        if (this.shouldLog(level)) {
            await Promise.all(this.transports.map(transport => transport.log(message, level)));
        }
    }

    private shouldLog(level: LogLevel): boolean {
        const levels = Object.values(LogLevel);
        return levels.indexOf(level) >= levels.indexOf(this.minLevel);
    }

    async debug(message: string): Promise<void> {
        await this.log(message, LogLevel.DEBUG);
    }

    async info(message: string): Promise<void> {
        await this.log(message, LogLevel.INFO);
    }

    async warn(message: string): Promise<void> {
        await this.log(message, LogLevel.WARN);
    }

    async error(message: string): Promise<void> {
        await this.log(message, LogLevel.ERROR);
    }

    /**
     * Permite añadir nuevos transports programáticamente (ej: ApiTransport)
     */
    addTransport(transport: ILogTransport): void {
        this.transports.push(transport);
    }
}
