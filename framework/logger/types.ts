export enum LogLevel {
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR'
}

export enum LogDestination {
    SCREEN = 'SCREEN',
    FILE = 'FILE',
    BOTH = 'BOTH'
}

export interface LoggerOptions {
    destination?: LogDestination;
    logFilePath?: string;
    level?: LogLevel;
}
