interface ILogger{
    log(message : string) : void;
    warn(message : string) : void;
    error(message : string) : void;
    debug(message : string) : void;
}

class ProductionLogger implements ILogger{
    log(message : string) : void{};
    warn(message : string) : void{
        console.warn(message)
    };
    error(message : string) : void{
        console.error('PROD:',message)
    };
    debug(message : string) : void{};
}


class DevelopmentLogger implements ILogger{
    log(message : string) : void{
        console.log(message)
    };
    warn(message : string) : void{
        console.warn(message)
    };
    error(message : string) : void{
        console.error('DEV:',message)
    };
    debug(message : string) : void{
        console.debug(message)
    };
}
class LoggerFactory{
    public static getLogger(env:string) : ILogger {
        console.log(env)
        return new (
            env === 'production' 
            ? ProductionLogger: DevelopmentLogger 
        )();
    }
}


const logger = LoggerFactory.getLogger(import.meta.env.VITE_NODE_ENV);
export default logger;

logger.debug("Debug message")
logger.error("Error message")
logger.log("logged message")
logger.warn("warning message")