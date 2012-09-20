package dUno.tests

import dUno._
import se.scalablesolutions.akka.actor.{Actor}
import Actor._

object Test {
  
  def main(args : Array[String]) : Unit = {
    
    val b = 1.toByte
    var json = ""
    
    var client1 = new DUnoWebSocket("xpto1")
    var client2 = new DUnoWebSocket("xpto2")
    
    
    DunoServer.send("addClient","xpto1",client1)
    
    DunoServer.send("addClient","xpto2",client2)
   
    
    json = """[{"id" : "1", "method" : "ping", "params" : ["200"] }]"""
    client1.onMessage(b,json)
    
    json = """[{"id" : "1", "method" : "ping", "params" : ["200"] }]"""
    client2.onMessage(b,json)
    
    json = """[{"id" : "1", "method" : "sessionStart", "params" : [] }]"""
    client1.onMessage(b,json)
    
    json = """[{"id" : "1", "method" : "sessionStart", "params" : [] }]"""
    client2.onMessage(b,json)
    
    json = """[{"id" : "1", "method" : "joinGame", "params" : [] }]"""
    client1.onMessage(b,json)
    
    json = """[{"id" : "1", "method" : "joinGame", "params" : [] }]"""
    client2.onMessage(b,json)
    
    json = """[{"id" : "1", "method" : "startGame", "params" : [] }]"""
    client1.onMessage(b,json)
    
    true
  }
  
}
