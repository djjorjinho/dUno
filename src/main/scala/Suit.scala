package dUno

object Suit extends Enumeration("r","g","y","b",""){
      type Suit = Value
      val Red, Green, Yellow, Blue, None = Value
}

object Rank extends Enumeration("0","1","2","3","4","5","6","7","8","9",""){
      type Rank = Value
      val Zero,One,Two,Three,Four,Five,Six,Seven,Eight,Nine,None = Value
      def value(rank:Rank) = rank.toString.toInt
}

object Action extends Enumeration("drw","dtw","wdr","wdf","skp","rev"){
      type Action = Value
      val Draw, DrawTwo, Wild, WildDrawFour, Skip, Reverse = Value
      val valmap = Map[Action,Int](Draw -> 0,DrawTwo -> 20, Wild -> 50,
                                   WildDrawFour -> 50, Skip -> 20, Reverse -> 20)
      def value(action: Action):Int = valmap(action)
}