/**
 * Functions to use on Room Class 
 * 
 */

function _send(jsonArr){
    if(room._ws != undefined && room._ws.readyState == 1){
    	room._ws.send(jQuery.toJSON(jsonArr));
    }
}

function rpcObj(meth,call){
	return {
		id : ++rpcid+'',
		jsonrpc: "2.0", 
		method: meth, 
		params: call
	};
}
		
function _join(username){
	room._username = username || ':newuser:';
}
  
function _chat(text) {
	if (text != null && text.length>0){
		_send(text);
	}
}

/**
 * Room Class methods 
 * 
 */


function _onopen(){
	log("connected");
    $('#join').removeClass().addClass('hidden');
    $('#joined').removeClass();
    $('#phrase').focus();
    
}
    
function _onmessage(m) {
	  var object =  jQuery.evalJSON(m.data);
	  
	  console.log( dump(object) );
	
}
    
function _onclose(m){
      room._ws=null;
      $('#join').removeClass();
      $('#joined').removeClass().addClass('hidden');
      $('#username').focus();
      $('#chat').html('');
      console.error("disconnected");
}
   
function _onerror(m){
	console.error(dump(m));
}

/**
 * Room Class constructor
 * 
 * @param ws	- the Websocket Object
 * @param username - the username string
 * @return
 */
function Room(ws,username){
	this._ws = ws;
    
    this._username = username || ':newuser:';
}

function newSocket(wsurl){
	console.log("Connecting to: "+wsurl);
	var ws = new WebSocket(wsurl);
	ws.onopen = _onopen;
    ws.onmessage = _onmessage;
    ws.onclose = _onclose;
    ws.onerror = _onerror;
    return ws;
}
