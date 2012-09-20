package dUno

class CardPlayer(val user:User) {
	var cardPile = new CardPile(Some(List[Card]()))
	var points = 0
 
	def addCard(card: Card):Card = {
		cardPile.add(card)
		card
	}
 
	def draw(card:Card):Card = {
		cardPile.draw
	}
	
	def stateStruct() = {
		import net.liftweb.json.JsonDSL._
		("name" -> user.name ) ~ ("points" -> points.toString) ~ ("cards" -> cardPile.deck.get.size.toString)
	}
 
	def userStateStruct() = {
		import net.liftweb.json.JsonDSL._
		("name" -> user.name) ~ ("points" -> points.toString) ~ ("cards" -> cardPile.deck.get.map{card => card.toString} )
	}
 
}
