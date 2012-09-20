package dUno

class CardPile(var deck:Option[List[Card]]){
	
	if(! deck.isDefined){
		deck = Some(List[Card]())
	}	
	
	def drawCard(rcard:Card) = {
		val ndeck = deck.get.filter{ card => card.toString != rcard.toString}
		deck = Some(ndeck)
		deck
	}
 
	def draw():Card = {
			val card = deck.get.head
			deck = Some(deck.get.tail)
			card
	}
 
	def add(card:Card):Card = {
			var list = deck.get
			list = card :: list
			deck = Some(list)
			card
	}
  
	override def toString():String = {
		var out = "Deck: "+deck.get.size+"\n"
		deck.get.foreach{ card =>
			out += card.toString+"\n"
		}
		out
	}
 
   def shuffle():CardPile = {
		var array : Array[Card] = deck.get.toArray
        val rnd = new java.util.Random
        for (n <- Iterator.range(array.length - 1, 0, -1)) {
                val k = rnd.nextInt(n + 1)
                val t = array(k); array(k) = array(n); array(n) = t
        }
        deck = Some(List.fromArray(array))
        
        this
	}
  
   def find(str:String) : Option[Card] = {
     var list = deck.get     
     var result = list.filter{card => card.toString == str}
     if(result.size == 1){
       return Some(result.head)
     }else{
      return None 
     }
   }
   
}
