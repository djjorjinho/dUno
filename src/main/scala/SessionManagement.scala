package dUno

import scala.collection.mutable.{HashMap,Set}
import se.scalablesolutions.akka.actor.Actor
import net.liftweb.json.JsonDSL._

trait SessionManagement extends Logging { this: Actor =>
	val sessions: HashMap[String, User]
    val clients: HashMap[String,DUnoWebSocket]
    var usercount = 0
    
    protected def sessionManagement: PartialFunction[Any, Unit] = {
		case ("addClient",id:String,socket:DUnoWebSocket) =>
			clients += id -> socket
		case ("userQuit",id:String) =>
			this.userQuit(id)
      	case ("sessionStart",args: List[String], ctx:Map[String,AnyRef]) =>

      	  	var name = ""
      	  	if(args.size > 0){ name = args(0) }
      	  	else{
      	  	  usercount += 1
      	  	  name = "User_"+usercount
      	  	} 
            
      	  	val sessionid = ctx("sessionid").asInstanceOf[String]
      	  	val user = new User(name,clients(sessionid)) 
      		sessions += sessionid -> user        
      		
      		info( sessions(sessionid).toString )
      		val ok = JSON.rpcOK(ctx("rpcid"), "OK")
			val json = JSON.render(ok)
			user.sendMsg(json)
      		//reply(true) // needed for synchronous calls

	    case ("ping",args: List[String], ctx:Map[String,AnyRef]) =>      
	      info("Ping!")
	      clients.foreach{ case(k,v) =>
	        val ok = JSON.rpcOK(ctx("rpcid"), "PINGED")
	        val json = JSON.render(ok)
	        v.send(json)         
	      }
	      //reply(true) // needed for synchronous calls
      
	}
    
    def removeSession(id:String) = {
      sessions -= id
    }
    
    def shutdownSessions = {
      sessions.clear
    }  
    
    var counter = 1;
    def userQuit(id:String):Boolean = {      
      info("Quiting: "+id)
      if(sessions.contains(id)){
	      val user = sessions(id)
	      val game = user.game
	      if(game != null){
		      game.removePlayer(user)
		      game.players.foreach{ player =>
		        JSON.rpcOp(counter.toString,"user_quit",("quitted" -> user.name) ~ ("status" -> game.stateStruct(player.user)) )
		        counter+=1
		      }
	      }
	      sessions -= id
      }
      clients -= id
      
      true
    }
}
