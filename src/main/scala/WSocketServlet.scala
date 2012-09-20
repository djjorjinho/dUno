package dUno

import se.scalablesolutions.akka.actor.{Actor}
import scala.collection.mutable.{HashMap,Set}
import javax.servlet.http._
import org.eclipse.jetty.websocket._
import org.eclipse.jetty.websocket.WebSocket.Outbound



class WSocketServlet extends WebSocketServlet with Logging{
  DunoServer.start
  
  override def doGet(req:HttpServletRequest, res:HttpServletResponse ) =
    getServletContext.getNamedDispatcher("default").forward(req, res)

  override def doWebSocketConnect(req:HttpServletRequest, protocol:String ) = {
    var id:String = req.getSession().getId()
    new DUnoWebSocket(id)
   }

}


