package dUno

import se.scalablesolutions.akka.actor.{SupervisorFactory,Actor,RemoteActor}
import se.scalablesolutions.akka.config.ScalaConfig._
import se.scalablesolutions.akka.config.OneForOneStrategy
import Actor._

trait DunoService extends Actor {
	faultHandler = Some(OneForOneStrategy(5, 5000))  
	trapExit = List(classOf[Exception])
	
	// abstract methods to be defined somewhere else  
	protected def gameManagement: PartialFunction[Any, Unit]
	protected def sessionManagement: PartialFunction[Any, Unit]
 
	// actor message handler  
	def receive = sessionManagement orElse gameManagement
}
