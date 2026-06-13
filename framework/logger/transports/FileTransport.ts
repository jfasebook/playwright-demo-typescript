import { ILogTransport } from '#framework/logger/interfaces/ILogTransport';
import { LogLevel } from '#framework/logger/types';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

export class FileTransport implements ILogTransport {
    constructor(private readonly filePath: string) {}

    async log(message: string, level: LogLevel): Promise<void> {
        const timestamp = new Date().toISOString();
        const formattedMessage = `[${timestamp}] [${level}] ${message}\n`;

        try {
            const dir = path.dirname(this.filePath);
            await fs.mkdir(dir, { recursive: true });
            await fs.appendFile(this.filePath, formattedMessage, 'utf8');
        } catch (error) {
            console.error(`Failed to write to log file: ${this.filePath}`, error);
        }
    }
}
