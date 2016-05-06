(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1290,
	height: 120,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"./assets/images/bar_1920.png", id:"bar_1920"},
		{src:"./assets/images/bar_1920_highlight_leftcap.png", id:"bar_1920_highlight_leftcap"},
		{src:"./assets/images/bar_1920_highlight_rightcap.png", id:"bar_1920_highlight_rightcap"},
		{src:"./assets/images/bar_highlight_1920.png", id:"bar_highlight_1920"}
	]
};



// symbols:



(lib.bar_1920 = function() {
	this.initialize(img.bar_1920);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,785,18);


(lib.bar_1920_highlight_leftcap = function() {
	this.initialize(img.bar_1920_highlight_leftcap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,14);


(lib.bar_1920_highlight_rightcap = function() {
	this.initialize(img.bar_1920_highlight_rightcap);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6,14);


(lib.bar_highlight_1920 = function() {
	this.initialize(img.bar_highlight_1920);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1,14);


(lib.leftEndCap = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bar_1920_highlight_leftcap();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6,14);


(lib.highlight_bar_scaleable = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bar_highlight_1920();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1,14);


(lib.caretBar = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(180,197,208,0)","#B4C5D0","#B4C5D0","rgba(180,197,208,0)"],[0,0.208,0.835,1],-3733.9,-109,6050.6,-109).s().p("AGPDwIj+j9Ij9D9MiiqAAAIAAneMFItAAAIAAHeg");
	this.shape.setTransform(964.1,20);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-87.8,-4,2104,48);


// stage content:
(lib.progressBar1920WGradient = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{none:0});

	// timeline functions:
	this.frame_1 = function() {
		/* js
		this.stop();
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(99));

	// lines
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5F849E").ss(2,1,1).p("AAAhCIAACF");
	this.shape.setTransform(978,60.2,1,0.889);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5F849E").ss(2,1,1).p("AAAhCIAACF");
	this.shape_1.setTransform(890,60.2,1,0.889);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5F849E").ss(2,1,1).p("AAAhCIAACF");
	this.shape_2.setTransform(804,60.2,1,0.889);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5F849E").ss(2,1,1).p("AAAhCIAACF");
	this.shape_3.setTransform(718,60.2,1,0.889);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5F849E").ss(2,1,1).p("AAAhCIAACF");
	this.shape_4.setTransform(630,60.2,1,0.889);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5F849E").ss(2,1,1).p("AAAhCIAACF");
	this.shape_5.setTransform(544,60.2,1,0.889);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5F849E").ss(2,1,1).p("AAAhCIAACF");
	this.shape_6.setTransform(457.5,60.2,1,0.889);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5F849E").ss(2,1,1).p("AAAhCIAACF");
	this.shape_7.setTransform(371.8,60.2,1,0.889);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(100));

	// rightEndCap
	this.instance = new lib.bar_1920_highlight_rightcap();
	this.instance.setTransform(1060.3,53);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97).to({_off:false},0).wait(3));

	// leftEndCap
	this.instance_1 = new lib.leftEndCap();
	this.instance_1.setTransform(286.3,60,1,1,0,0,0,3,7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(98));

	// bar
	this.instance_2 = new lib.highlight_bar_scaleable();
	this.instance_2.setTransform(289.6,60,1,1,0,0,0,0.5,7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({scaleX:771,x:674.8},95).wait(3));

	// bg
	this.instance_3 = new lib.bar_1920();
	this.instance_3.setTransform(282,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(100));

	// caretMask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhBlADRIgBmhMCDNAAAIAAGhg");
	mask.setTransform(671.8,99);

	// caret
	this.instance_4 = new lib.caretBar();
	this.instance_4.setTransform(22.9,99,1,1,0,0,0,709.7,21);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({x:791.6,y:97},95).wait(3));

	// Layer 11
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(180,197,208,0)","#B4C5D0","#B4C5D0","rgba(180,197,208,0)"],[0,0.208,0.835,1],-782.2,-95.4,727.8,-95.4).s().p("EhBlADRIgBmiMCDNAAAIAAGig");
	this.shape_8.setTransform(671.8,72.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(100));

	// gradient
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(180,197,208,0)","#B4C5D0","#B4C5D0","rgba(180,197,208,0)"],[0,0.173,0.882,1],-645,0,645,0).s().p("EBFVAJXIAAmjMiAOAAAIAAGjMgp4AAAIAAyuMDJiAAAIAASug");
	this.shape_9.setTransform(645,60);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(645,60,1290,120);




// symbols:



(lib.flash = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0.11,0.514,0.859],0,124.5,0,-124.5).s().p("AzcN/IAA79MAm5AAAIAAb9g");
	this.shape.setTransform(124.5,89.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,249,179);


(lib.flare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ANLLzIjhgLQjLg/kNhmQoYjOlJjFQnMkTAXjeQAdkVMTiwINaAAQi0ATjXAuQmsBeivCQQj1DJEsEOQF3FVS4GxQhLgGjwgNg");
	mask.setTransform(524.1,79.5);

	// flare
	this.instance = new lib.flash();
	this.instance.setTransform(527.5,-87.5,1,1,0,0,0,124.5,89.5);
	this.instance.alpha = 0.5;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:245.5},22).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(408.3,2,231.8,0);


(lib.SWOOSH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// maskLarge (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg/fANqIAA7UMB+/AAAIAAbUg");
	mask.setTransform(405.5,87.5);

	// Layer 6
	this.instance = new lib.flare("synched",0,false);
	this.instance.setTransform(349.4,-53.6,2.894,1.947,0,0,0,527.4,-10.1);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(230));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EAtEANfIjhgNQjLhHkNh0QoajolJjfQnMk2AXj7QAdk4MTjGINcAAQi0AUjXA1QmuBpiuCjQj1DjEsEyQF2GAS6HqQhLgIjwgOg");
	mask_1.setTransform(320,88.5);

	// flare
	this.instance_1 = new lib.flash();
	this.instance_1.setTransform(527.5,-87.5,1,1,0,0,0,124.5,89.5);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:245.5},16).wait(226));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(408.3,2,231.8,0);


// stage content:



(lib.SwooshSource = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SWOOSH();
	this.instance.setTransform(335.3,-10,1,1,0,0,0,331.4,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(409.4,-89.5,813,354);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;


