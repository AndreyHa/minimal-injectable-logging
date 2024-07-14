interface ILogger {
    verbose(...args: any[]): any
    info(...args: any[]): any
    success(...args: any[]): any
    warn(...args: any[]): any
    error(...args: any[]): any
}

export class ConsoleLogger implements ILogger {
    public verbose(...args: any[]): any { console.log(...args) }
    public info(...args: any[]): any { console.log(...args) }
    public success(...args: any[]): any { console.log(...args) }
    public warn(...args: any[]): any { console.warn(...args) }
    public error(...args: any[]): any { console.error(...args) }
}

let LoggerInstance: ILogger = new ConsoleLogger()
export namespace Logger {
    export function verbose(...args: any[]) { LoggerInstance.verbose(...args) }
    export function info(...args: any[]) { LoggerInstance.info(...args) }
    export function success(...args: any[]) { LoggerInstance.success(...args) }
    export function warn(...args: any[]) { LoggerInstance.warn(...args) }
    export function error(...args: any[]) { LoggerInstance.error(...args) }

    export function setLogger(logger: ILogger) { LoggerInstance = logger }
}

/**
 * Logs in format:
 * INFO    09:41:00 Server is running!
 * SUCCESS 09:41:00 Successfully connected to MongoDB
 * 
 * Not printing verbose logs
 */
export class MinimalLogger implements ILogger {
    public verbose(...args: any[]): any { }
    public info(...args: any[]): any { this.log('INFO', "\x1b[34m", ...args) }
    public success(...args: any[]): any { this.log('OK', "\x1b[32m", ...args) }
    public warn(...args: any[]): any { this.log('WARN', "\x1b[33m", ...args) }
    public error(...args: any[]): any { this.log('ERROR', "\x1b[31m", ...args) }

    private log(level: string, color: string, ...args: any[]): any {
        const now = new Date()
        const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`.padEnd(8)
        process.stdout.write(`${color}${level.padEnd(5)}\x1b[0m ${time} `)
        console.log(...args)
    }
}
