//TyrannosaurusText.js
function Text(c){

	//set font to really large by default

	this.class = c;
	this.width = 200//document.getElementsByClassName(this.class)[0].style.width;
	/*this.all_caps = false;
	this.avoid_overflow = true; //true by default
	this.line_height_gap = 2; //2 by default
	this.words_per_line = 1; //1 by default
	this.alignX = "center";
	//this.height = document.getElementsByClassName(this.class)[0].style.height;
	this.alignY = "center"; //vertically center by default
	*/
	
	var N = 0;

	this.set = function(){
		var len = document.getElementsByClassName(this.class).length;

		for(var i = 0; i<len; i++){
			string = this.getString(i);
			sizeable = this.insertP(string).join("");
			document.getElementsByClassName(this.class)[i].innerHTML = "<div class='TyrannosaurusText'>" + sizeable + "</div>";
		} 
		for(var i = 0; i<N; i++){
			this.setSize(i);
			this.setMarginTop(i);
		}
		return;
	}

	this.getString = function(i){
		return document.getElementsByClassName(this.class)[i].innerHTML;
	}

	this.insertP = function(string){
		body = string.split(" ");
		for(var i = 0 ; i<body.length; i++){
			body[i] = "<span class='Saurus' id='Saurus-" + N + "'>" + body[i] + "</span><br />"
			N++;
		}
		return body;
	}

	this.setSize = function(id){
		//if(!avoid_overflow)return;
		span = document.getElementById("Saurus-"+id);
		for(var i = 0; span.offsetWidth<this.width; i++){
			span.style.fontSize = i;
		}
		return;
	}

	this.setMarginTop = function(id){
		if(id==0)return;
		span = document.getElementById("Saurus-"+id);
		span_prev = document.getElementById("Saurus-"+(id-1));
		prev_height = span_prev.offsetHeight;
		span.style.top = 0;
		span.style.marginTop = prev_height;
	}

	/*
	function verticalAlign(){

	}


	/*
	*/
}


/*
square = new Text("class");
square.width = 200; //px
square.line_height_gap = 2; //px
square.set();
*/