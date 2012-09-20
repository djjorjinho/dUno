package dUno

import org.eclipse.jetty.websocket._
import org.eclipse.jetty.websocket.WebSocket.Outbound
import se.scalablesolutions.akka.actor._
import Actor._

class DUnoWebSocket(val id:String) extends WebSocket with Logging{
	
	
    var outbound:Outbound = _
    
    def send(data:String) = {
      if(outbound != null)this.outbound.sendMessage( data );
      info("SID: "+id+" msg: "+data)
    }
    
    override def onConnect(outbound:Outbound ) = {
      this.outbound = outbound
      DunoServer.send("addClient",id,this)
      info("A new connection session "+this.id)
    }

    override def onMessage(frame:Byte, data:Array[Byte], offset:Int, length:Int ) = {}
    
    override def onMessage(frame:Byte, data:String ) = {
      info("onMessage data: ")
      
	  val obj = JSON.parse(data).values
	  
	  info("rpc parsed: "+obj)
   
      val nobj = obj.asInstanceOf[List[AnyRef]]
      val size = nobj.size
	  nobj.foreach{ rpc =>
	    val rrpc = rpc.asInstanceOf[Map[String,AnyRef]]
	    val id = rrpc("id").asInstanceOf[String]
	  	val method = rrpc("method").asInstanceOf[String]
        val params = rrpc("params").asInstanceOf[List[String]]
        info("method: "+method+" params: "+params)
        val context = Map("sessionid" -> this.id, "rpcid" -> id)
        info("Size: "+size)
        if(size > 1){// treat rpc multicall as synchronous
	        val result = DunoServer !! ((method,params,context), 10 * 1000) // 10sec timeout
	        //if(!result.isDefined) throw new RuntimeException("TIMEOUT")
        	true
         }else{
        	 DunoServer.send(method,params,context)
        }
        
	  }

    }

    override def onDisconnect = {
      DunoServer.send("userQuit",id)
    }
    
  }
