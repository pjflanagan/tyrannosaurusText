# tyrannosaurusText
Tyrannosaurus Text offers more font alignment and sizing options than css alone.
Specifically, it automatically makes words the same width by selecting the font size for you.

#Usage
CSS requres two classes be defined and then optional id's that are attached to the classes.
```
.tyrannosaurusText {
	position: relative;
}
#tyrannosaurusText-# { top: #px; }
.Saurus {
	white-space: nowrap;
	position: relative;
	margin: 0;
}
#Saurus-# { top: #px; }
```
JS requires you to define the class, set the width of the text in pixels, and then run .set() when ready.
```
window.onload = function(){
			var square = new Text("square");
			square.width = 180; //px
			square.set();
}
```
HTML only needs the class and then the text written out.
```
<div class="square">TYRANNOSAURUS TEXT</div>
```
