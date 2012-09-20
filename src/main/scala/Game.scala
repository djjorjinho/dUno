package dUno

import Suit._
import Rank._
import Action._
import net.liftweb.json.JsonDSL._

// TODO: start new round functionality
class Game(dealer:User) extends Logging{
	var started = false
	val cardDealer = new CardPlayer(dealer)
	var players = List[CardPlayer](cardDealer)
	if(dealer.game != null)dealer.game.removePlayer(dealer)
	dealer.game = this
	
	var turn = cardDealer // currently playing user
	var color = Suit.None // for use in wild draws
 
	var drawPile = newDeck()
	var discardPile = new CardPile(Some(List[Card]()))
 
	def addPlayer(player:User):Boolean = {
		info("addPlayer")
		if(players.size < 4){
			players = new CardPlayer(player) :: players
			if(player.game != null)player.game.removePlayer(player)
			player.game = this
			return true
		}else{
			return false
		}
	
	}
	
	// TODO: assess game if already started
	def removePlayer(player:User):Boolean = {
		players = players.filter{cardPlayer => cardPlayer.user != player}
		true
	}
 
	def drawToPlayer(player:CardPlayer):Card = {
	  val card = drawPile.draw
	  player.addCard(card)
	  card
	}
 
	def draw(card:Card):Card = {
	  discardPile.add(card)
	  card
	}
 
	def start() = {
		if(!started){
			started = true
			reversePlayers() // start dealer on top
			dealCards()
		}
		false
	}
	
	def reversePlayers() = {
		players = players.reverse
	}
	
	def getPlayer(player:User):CardPlayer = {
			val list = players.filter{ cardPlayer => cardPlayer.user == player }
			list(0)
	}
 
	def getOtherPlayers(player: User):List[CardPlayer] = {
		val others = players.filter{ cardPlayer => cardPlayer.user != player }
		others
	}
	
	def newDeck():CardPile = {
				var list = List[Card]()
				
				// suit cards
				var it = Suit.elements
				while(it.hasNext){
					val suit = it.next
					if(suit != Suit.None){
						// number ranks
						for(i <- 0 to 9){
							val rank = Rank.valueOf(i.toString).get
							
							list = new Card(suit,rank,Action.Draw) :: list
       
							if(rank != Rank.Zero)list = new Card(suit,rank,Action.Draw) :: list 
						}
	     
						// draw two, skip and reverse
						for(i <- 1 to 2){
							list = new Card(suit,Rank.None,Action.DrawTwo) :: 
								new Card(suit,Rank.None,Action.Skip) :: 
									new Card(suit,Rank.None,Action.Reverse) :: list
						}
					}
				}
    
				// special cards
				val special = List[Action](Action.Wild,Action.WildDrawFour)
				special.foreach{ action =>
					list = new Card(Suit.None,Rank.None,action) :: 
						new Card(Suit.None,Rank.None,action) ::
						new Card(Suit.None,Rank.None,action) ::
						new Card(Suit.None,Rank.None,action) :: list
				}
				
				var deck = new CardPile(Some(list)).shuffle
				info(deck.toString)
				deck
		}
		
		def nextTurn():CardPlayer = {
			var idx = players.indexOf(turn)
			if(idx+2 > players.size){
				turn = players(0)
				turn
			}else{
				turn = players(idx+1)
				turn
			}
		}
 
		def stateStruct(user:User) = {
			import net.liftweb.json.JsonDSL._
			val players = getPlayer(user).userStateStruct :: 
					getOtherPlayers(user).map{pl => pl.stateStruct}
			var whoturn:String = ""
			if(turn.user.name == user.name){whoturn = "you"}else{whoturn = turn.user.name} 
			("turn" -> whoturn) ~ ("color" -> color.toString) ~ ("players" -> players) ~ ("started" -> started)
		}
  
		def dealCards() = {
			players.foreach{ player =>
			  	for(i <- 1 to 7){player.addCard(drawPile.draw)}
			}
		}
  
		def playCard(user:User,card:Card,uno:Boolean):List[Any] = {
			info(user.name)
			List()
		}
		
		def assessGame(user:User): Map[String,String] = {
			var nocards = players.filter{ player => player.cardPile.deck.get.size == 0}
			var stat = Map[String,String]()
			if(nocards.size == 1){ // we have a winner
			    
			}else{ // show game state
				
			}			
			stat
		}
  
}
