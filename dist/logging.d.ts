interface ILogger {
    verbose(...args: any[]): any;
    info(...args: any[]): any;
    success(...args: any[]): any;
    warn(...args: any[]): any;
    error(...args: any[]): any;
}
export declare class ConsoleLogger implements ILogger {
    verbose(...args: any[]): any;
    info(...args: any[]): any;
    success(...args: any[]): any;
    warn(...args: any[]): any;
    error(...args: any[]): any;
}
export declare namespace Logger {
    function verbose(...args: any[]): void;
    function info(...args: any[]): void;
    function success(...args: any[]): void;
    function warn(...args: any[]): void;
    function error(...args: any[]): void;
    function setLogger(logger: ILogger): void;
}
/**
 * Logs in format:
 * INFO    09:41:00 Server is running!
 * SUCCESS 09:41:00 Successfully connected to MongoDB
 *
 * Not printing verbose logs
 */
export declare class MinimalLogger implements ILogger {
    verbose(...args: any[]): any;
    info(...args: any[]): any;
    success(...args: any[]): any;
    warn(...args: any[]): any;
    error(...args: any[]): any;
    private log;
}
export {};
