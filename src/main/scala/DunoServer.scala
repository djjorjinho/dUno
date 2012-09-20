package dUno

import scala.collection.mutable.{HashMap,Set}
import se.scalablesolutions.akka.actor.{Actor}


object DunoServer extends DunoService 
	with Logging with SessionManagement with GameManagement{

    val clients = HashMap.empty[String, DUnoWebSocket]	// websocket clients
    val sessions = HashMap.empty[String, User]	// user sessions
    var games = List[Game]()
        
    override def start: Actor = {
	    super.start
	    info("===============START====================")
	    this
  	}
  	
    
    
}


