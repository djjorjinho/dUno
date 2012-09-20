var _debug=true;
function log(str){
	if(_debug) console.log(str)
}

/**
 * Dumper function similar to perl's Data::Dumper
 * 
 * @param arr
 * @param level
 * @return
 */
function dump(arr,level) {
	var dumped_text = "";
	if(!level) level = 0;
	
	//The padding given at the beginning of the line.
	var level_padding = "";
	for(var j=0;j<level+1;j++) level_padding += "    ";
	
	if(typeof(arr) == 'object') { //Array/Hashes/Objects 
		for(var item in arr) {
			var value = arr[item];
			
			if(typeof(value) == 'object') { //If it is an array,
				dumped_text += level_padding + "'" + item + "' ...\n";
				dumped_text += dump(value,level+1);
			} else {
				dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
			}
		}
	} else { //Strings/Chars/Numbers etc.
		dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
	}
	return dumped_text;
}

/**
 * Simple benchmark tool. Might not be 100% accurate.
 * 
 * @param sfunc	The function name
 * @param func	The function reference (callback)
 * @param argv	The arguments array
 * @return	Whatever the callback function returns
 */
function bench(sfunc,func,argv){
    var startTime,endTime;    
        startTime=new Date().getTime();
     var out = func.apply(this,argv);
        endTime=new Date().getTime();
        console.log("'"+sfunc+"' elapsed time: "+((endTime-startTime)/1000)+" seconds.");
     return out;
}

/**
 * Test function
 * 
 * @param val	
 * @param val1	
 * @return		nothing
 */
function hello(val,val1){
	console.log("val was: "+val);
	console.log("val1 was: "+val1);
	console.log(dump(arguments));
}

/**
 * Executes a given command with following arguments and return that functions output.
 * Also calls the benchmarking tool if set.
 * 
 * @return		Whatever the callback function returns
 */
function execute(){
	//console.log("arguments: "+dump(arguments));
	var argc = arguments.length;
	var argv= new Array();
	if(argc == 0){
		//console.log("no arguments");
		return;
	}else{
		for( var i = 0; i < argc; i++ ) {
			argv.push(arguments[i]);
		}
	}
	
	// the function name string
	var sfunc = argv.shift();
	//console.log(sfunc+" arguments: "+dump(argv));
	
	// the function ref
	var func;
	if(window[sfunc]) func = window[sfunc]; // gets the reference
	
	//console.log(typeof(func));
	if(typeof func == 'function'){
		//console.log("function!");
		//return func.apply(this,argv); // regular call
		ws.send(rpc.createRequest(sfunc,argv));
		return bench(sfunc,func,argv); // benchmarking call
		
	}else{
		console.log("no '"+sfunc+"' function!!");
		return;
	}
	return;
}