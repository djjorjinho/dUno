package dUno

import Suit._
import Rank._
import Action._

class Card(suit:Suit, rank:Rank, action:Action){
  
  def value():Int = {
    if(action != Action.Draw){
      Action.value(action)
    }else{
      Rank.value(rank)
    }
  }
  
  override def toString():String = suit.toString+rank.toString+action.toString
}
