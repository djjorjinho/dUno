package dUno

import net.liftweb.json._
import net.liftweb.json.JsonAST._
import net.liftweb.json.JsonDSL._

object JSON {
  
  def parse(str: String):JValue = {
    try{
    	JsonParser.parse(str)
    }catch{
      case e:Exception => 
        val ret = List(rpcOp("0","ping",List[String]()))
        ret
    }
  }
  
  def getId(obj: JValue) = {obj \\ "id"}
  
  def getMethod(obj: JValue) = {obj \\ "method"}
  
  def rpcOK(id: AnyRef, result: String) = {
    ("id" -> id.asInstanceOf[String]) ~ ("jsonrpc" -> "2.0" ) ~ ("result" -> result)
  }
  
  def rpcOK(id: AnyRef, result: List[String]) = {
    ("id" -> id.asInstanceOf[String]) ~ ("jsonrpc" -> "2.0" ) ~ ("result" -> result)
  }
  
  def rpcOK(id: AnyRef, result: Seq[String]) = {
    ("id" -> id.asInstanceOf[String]) ~ ("jsonrpc" -> "2.0" ) ~ ("result" -> result)
  }
  
  def rpcNOK(id: AnyRef, code: String, msg: String) = {
    ("id" -> id.asInstanceOf[String]) ~ ("jsonrpc" -> "2.0") ~ ( "error" -> ("code" -> code) ~ ("message" -> msg) )
  }
  
  def rpcOp(id: AnyRef, method: String, params: List[String]) = {
    ("id" -> id.asInstanceOf[String]) ~ ("jsonrpc" -> "2.0") ~ ("method" -> method) ~ ("params" -> params)
  }
  def rpcOp(id: AnyRef, method: String, params: JValue) = {
    ("id" -> id.asInstanceOf[String]) ~ ("jsonrpc" -> "2.0") ~ ("method" -> method) ~ ("params" -> params)
  }
  
  def render(obj: JValue) = { compact(JsonAST.render(obj)) }
    
}
