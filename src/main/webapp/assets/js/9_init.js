/**
 * helper functions
 */
function hasWebSockets(){
	if (!window.WebSocket){	
		console.log("WebSocket not supported by this browser"); 
		return false;
	}else{
		return true;
	}
}

function getKeyCode(ev) { 
	if (window.event) return window.event.keyCode; 
	return ev.keyCode; 
}

/**
 * Variables 
 */

var wsurl = "ws://127.0.0.1:8080/dUno/ws/";
var url = window.location.href;
wsurl = url.replace("http", "ws") + "ws/";
var ws = newSocket(wsurl);
ws.readyState = 1; // HACK
var room = new Room(ws);
var keepAlive;
var rpcid=0;

/**
 * Startup
 */
jQuery(document).ready(function($) {
		
		if(! hasWebSockets()){
			
			
			return;
		}
	
		$('#username').attr('autocomplete','OFF');
		$('#username').bind('keyup',function(ev) { var keyc=getKeyCode(ev); if (keyc==13 || keyc==10) { _join($('#username').val()); return false; } return true; });
		
		$('#joinB').bind('click', function(event) { _join($('#username').val()); return false; });
		
		$('#phrase').attr('autocomplete','OFF');
		$('#phrase').bind('keyup', function(ev) {   var keyc=getKeyCode(ev); if (keyc==13 || keyc==10) { _chat($('#phrase').val()); $('phrase').val(''); return false; } return true; });
		
		$('#sendB').bind('click',function(event) { _chat($('#phrase').val()); $('#phrase').val(''); return false; });
		
		$('#board_container').corner();
		
		keepAlive = setInterval(function(){ _send([rpcObj('ping',['200'])] ); },5*1000);
});

