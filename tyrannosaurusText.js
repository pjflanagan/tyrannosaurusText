//TyrannosaurusText.js

function Text(class){

	//set font to really large by default

	this.width = document.getElementByClassName(class)[0].style.width;
	this.all_caps = false;
	this.avoid_overflow = true; //true by default
	this.line_height_gap = 2; //2 by default
	//this.words_per_line = 1 //1 by default
	this.alignX = "center";
	this.height = document.getElementByClassName(class)[0].style.width;
	this.alignY = "center"; //vertically center by default

	private previous_size,
			total_height,
			span_count,
			heights[];

	this.set = function(){
		//for document.getElementByClass[]
		//
		//getString
		//insertSpansAndBreaks
		//checkOverflow
			//total_height++
		//setMarginTop
			//total_height++
		//verticalAlign
		
	}

	function verticalAlign(){

	}

	function setMarginTop(){

	}

	function checkOverflow(line){
		if(!avoid_overflow)return;
		//overflow = span.width > width
		while(overflow){
			//line_font--;
		}
	}

	function getString(){

	}

	function insertSpansAndBreaks(){
		//string.split(" ")
		//for(N)
		//insert <span class="Saurus" id="Saurus-N">
		//replace ("<br />")
	}

	//.saurus {position:relative;}
}


/*
square = new Text("class");
square.width = 200; //px
square.line_height_gap = 2; //px
square.set();
*/