package dUno

import scala.collection.mutable.{HashMap,Set}
import se.scalablesolutions.akka.actor._
import net.liftweb.json.JsonDSL._

// TODO: output status after playing card
// TODO: start new game after round is ended
trait GameManagement extends Logging{ this: Actor =>
  val sessions: HashMap[String, User]
  var games: List[Game]
  
  protected def gameManagement: PartialFunction[Any, Unit] = {
	case ("joinGame",args: List[String], ctx:Map[String,AnyRef]) =>
	  val user = sessions(ctx("sessionid").asInstanceOf[String])
	  val available = games.filter{game => game.started.equals(false)}.filter{ game => game.players.size < 4  }
	  if(available.size > 0){
		  available.head.addPlayer(user)
		  val ok = JSON.rpcOp(ctx("rpcid"), "joined",List[String]())
	  	  val json = JSON.render(ok)
	  	  user.sendMsg(json)
	  }else{
		  val game = new Game(user)
		  games = game :: games
		  val ok = JSON.rpcOp(ctx("rpcid"), "joined",List[String]("newgame"))
	  	  val json = JSON.render(ok)
	  	  user.sendMsg(json)
	  }
	  //games.foreach{g => info(g.players.toString)}
	  //reply(true)
   
	case ("startGame",args: List[String], ctx:Map[String,AnyRef]) =>
	  val user = sessions(ctx("sessionid").asInstanceOf[String])
	  if(user.game==null){
		  val nok = JSON.rpcNOK(ctx("rpcid"),"no_game","User has no assigned game")
		  val json = JSON.render(nok)
	  	  user.sendMsg(json)
	  }else if( user.game.started ){
		  val nok = JSON.rpcNOK(ctx("rpcid"),"already_started","Game already started")
		  val json = JSON.render(nok)
	  	  user.sendMsg(json)
	  }else{
		  val game = user.game
		  if(game.players.size < 2){
			  val nok = JSON.rpcNOK(ctx("rpcid"),"not_enough_users","Not enough users to start a game")
			  val json = JSON.render(nok)
	  	  	  user.sendMsg(json)
		  }else{
			  game.start()
			  // current user
			  val ok = JSON.rpcOK(ctx("rpcid"),List("OK","Your turn to play"))
			  val json = JSON.render(ok)
	  	  	  user.sendMsg(json)
	  	  	  val userstate = game.stateStruct(user)
	  	  	  val userstatejson = JSON.render(userstate) 
	  	  	  user.sendMsg(userstatejson)
	  	  	  
	  	  	  // other players
	  	  	  val others = game.getOtherPlayers(user)
	  	  	  val startok = JSON.rpcOp(ctx("rpcid"),"start_game",List())
	  	  	  val startjson = JSON.render(startok)
	  	  	  others.foreach{player => 
	  	  	    val userstate = game.stateStruct(player.user)
	  	  	    val userstatejson = JSON.render(userstate)
	  	  	    player.user.sendMsg(startjson)
	  	  	  	player.user.sendMsg(userstatejson)
	  	  	  }
			  true
		  }
	  }	  
	  //reply(true)
	  
	  case ("playCard",args: List[String], ctx:Map[String,AnyRef]) =>
	    val user = sessions(ctx("sessionid").asInstanceOf[String])
	    val game = user.game
	    if(game==null || !game.started){
	    	  val nok = JSON.rpcNOK(ctx("rpcid"),"no_game","Game not assigned or hasn't started yet")
			  val json = JSON.render(nok)
	  	  	  user.sendMsg(json)
	    }else if(game.turn != game.getPlayer(user)){
	    	  val nok = JSON.rpcNOK(ctx("rpcid"),"no_turn","It's not your turn to play")
			  val json = JSON.render(nok)
	  	  	  user.sendMsg(json)
	    }else{
	    	  val card = str2Card(args(0))
	    	  val uno = args(1)
	    	  val stat = game.playCard(user,card,uno.toBoolean)
	    	  stat
	    }
	  	//reply(true)
  }
  
  def str2Card(str:String):Card = {
	  var ssuit = ""
	  var srank = ""
	  var saction = ""
   
	  if(str.size == 5){//draw card
       ssuit = str.charAt(0)+""
       srank = str.charAt(1)+""
       saction = str.substring(2)
	  }else if(str.size == 4){ // action card
	    ssuit = str.charAt(0)+""
	    saction = str.substring(1)
	  }else{ // wild card
		  saction = str
	  }
   
	  new Card(Suit.valueOf(ssuit).get,Rank.valueOf(srank).get,Action.valueOf(saction).get)
  }
  
}
