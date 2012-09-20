package dUno.tests

import scala.collection.mutable.{LinkedList}

object LinkedListTest {
  def main(args : Array[String]) : Unit = {
    var list = List("A","B","C")
    var idx = list.indexOf("C")
    if(idx+2 > list.size ){
      println(list(0))
    }else{
      println(list(idx+1))
    }
  }
}
