package dUno

//import org.slf4j.Logger
//import org.slf4j.LoggerFactory;

trait Logging {
	
def info(message:String, values:Any*) = {
	System.err.println(message)
}
 /*
 //val logger = LoggerFactory.getLogger(getClass)

 def trace(message:String, values:Any*) = {}
     //logger.trace(message, values.map(_.asInstanceOf[Object]).toArray)
 def trace(message:String, error:Throwable) = {} 
     //logger.trace(message, error)
 def trace(message:String, error:Throwable, values:Any*) = {}
     //logger.trace(message, error, values.map(_.asInstanceOf[Object]).toArray)

 def debug(message:String, values:Any*) = {}
     //logger.debug(message, values.map(_.asInstanceOf[Object]).toArray)
 def debug(message:String, error:Throwable) =  {}
     //logger.debug(message, error)
 def debug(message:String, error:Throwable, values:Any*) = {} 
     //logger.debug(message, error, values.map(_.asInstanceOf[Object]).toArray)

 def info(message:String, values:Any*) = {}
     //logger.info(message, values.map(_.asInstanceOf[Object]).toArray)
 def info(message:String, error:Throwable) = {}
     //logger.info(message, error)
 def info(message:String, error:Throwable, values:Any*) = {} 
     //logger.info(message, error, values.map(_.asInstanceOf[Object]).toArray)

 def warn(message:String, values:Any*) = {}
     //logger.warn(message, values.map(_.asInstanceOf[Object]).toArray)
 def warn(message:String, error:Throwable) = {}
     //logger.warn(message, error)
 def warn(message:String, error:Throwable, values:Any*) ={} 
     //logger.warn(message, error, values.map(_.asInstanceOf[Object]).toArray)

 def error(message:String, values:Any*) = {}
     //logger.error(message, values.map(_.asInstanceOf[Object]).toArray)
 def error(message:String, error:Throwable) = {}
     //logger.error(message, error)
 def error(message:String, error:Throwable, values:Any*) = {}
     //logger.error(message, error, values.map(_.asInstanceOf[Object]).toArray)
 */    
}