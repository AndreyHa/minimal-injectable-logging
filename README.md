# minimal-injectable-logging
 Minimal and flexible zero-dependency logging npm package

### Usage:
```ts
import { Logger, MinimalLogger, ILogger } from "minimal-injectable-logging";

Logger.info('Standard console.log')
Logger.setLogger(new MinimalLogger())
Logger.info("Log with colored tag and time")

class MyLogger implements ILogger {
    verbose(...args: any[]) { console.log('MyLogger:', ...args) }
    info(...args: any[]) { console.log('MyLogger:', ...args) }
    success(...args: any[]) { console.log('MyLogger:', ...args) }
    warn(...args: any[]) { console.warn('MyLogger:', ...args) }
    error(...args: any[]) { console.error('MyLogger:', ...args) }
}

Logger.setLogger(new MyLogger())
Logger.info('Custom logger')
```

Result:
```
Standard console.log
INFO  11:56:26 Log with colored tag and time
MyLogger: Custom logger
```

