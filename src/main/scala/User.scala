package dUno

import java.util.UUID

class User(var name:String, val socket:DUnoWebSocket){

	var game:Game = null
	val uid = UUID.randomUUID()
   
  override def toString():String = {
    var out = "User name: "+name
    if(game != null) out += " Game: "+game.toString
    out
  }
  
  def hasGame():Boolean = {
    if(game == null) false 
    else true
  }
  
  def getName():String = name
  
  def sendMsg(data:String) = {socket.send(data)}
}
