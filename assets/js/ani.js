var i;
var featureScroller;

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37 :
			// left arrow
			scrollToLeft();
			break;
    case 39 :
			// right arrow
			scrollToRight();
			break;
	}
};

window.onload = function() {
	init();
};

function init() {
	i = 1;
	featureScroller = document.querySelectorAll("#featureScroller");
}

function scrollToLeft()
{
	if(i > 1) {
		i--;
		Velocity(featureScroller, { left: "+=33.33333%"}, { duration: 500, easing: "easeInOutSine" });
	}
}

function scrollToRight()
{
	if(i < 3) {
		Velocity(featureScroller, { left: "-=33.33333%"}, { duration: 500, easing: "easeInOutSine" });
		i++;
	}
}

function getCssProperty(element, property){
   return window.getComputedStyle(element,null).getPropertyValue(property);
}
