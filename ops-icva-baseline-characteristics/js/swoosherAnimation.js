(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 813,
	height: 175,
	fps: 24,
	color: "#0000FF",
	manifest: []
};



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