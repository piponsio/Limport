// Limport.js by Piponsio
// https://github.com/piponsio/Limport

class Limport{
	static _status = new Map();
	static _display_info = true;
	static _async = false;

	static setStatusImport(url, bool){
		Limport._status.set(url, bool);
	}

	static add(url) {
		if(url.length > 0){
		    var script = document.createElement("script");
			script.src = url;
		    script.type = 'text/javascript';
		    if(Limport._async == true){
		    	script.async = true;
		    	script.defer = false;
		    }
		    else{
		    	script.async = false;
		    	script.defer = true;	
		    }
			document.querySelector("head").appendChild(script);
			
		    script.onreadystatechange = function(){
		    	Limport.setStatusImport(url, true);
		    };
		    script.onload = function(){
		    	Limport.setStatusImport(url, true);
		    };
			script.onerror = function(){
				Limport.setStatusImport(url, false);
			};

		}
	}

	static setDisplayInfo(value){
		Limport._display_info = value;
	}

	static displayInfo(){
		if(Limport._display_info){

			if(Limport._display_info) console.log("Loading " + Limport._status.size + " modules.");
			for(let [key, value] of Limport._status){
				if(value){
					console.log("Imported: " + key);
				}
				else{
					console.log("Error: " + key);
				}
			}
				
			if(Limport._display_info) console.log();
		}
	}
}