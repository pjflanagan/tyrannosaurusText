# tyrannosaurusText
Tyrannosaurus Text offers a quick fix to make your html words mono-width to give text a solid blocky appearance.

#Usage
##HTML 
In the &lt;head&gt; tag, link to the style sheet and the js code. 
Then in the &lt;body&gt; all you have to do is write the text you need in the &lt;div&gt; you want to have mono-width text
```
<script type="text/javascript" src="tyrannosaurusText.js"></script>
<link rel="stylesheet" type="text/css" href="tyrannosaurusText.css">

<div class="square">TYRANNOSAURUS TEXT</div>
```
##JS
In the &lt;script&gt; tag or .js file you are using, all you have to do is call tText() and pass it the class name of the text you want to modify and width you want the text to be.
```
window.onload = function(){
	new tText("class-name",width);
}
```
##CSS
TyrannosaurusText will automatically name your text blocks with ids TyrannosaurusText-# for each block of text, and Saurus-# for each line. All you have to do is subtract pixels until you find the gap in between each line that you want.
```
#tyrannosaurusText-# { top: #-px; }
#Saurus-# { top: #-px; }
```
