var i;
var featureScroller;
var anchors;
var stickyNav;
var stickyNavTop;

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
	initScroller();
  initSticky();
};

function initScroller() {
	i = 1;
	featureScroller = document.querySelectorAll("#featureScroller");
  anchors = document.querySelectorAll('a[href*="#"]');
  anchors.forEach( function(anchor) {
    var targetName = anchor.href.substring(anchor.href.lastIndexOf('#') + 1);
    var target = document.getElementById(targetName);
    anchor.addEventListener("click", function (e) {
      Velocity(target, "scroll", { duration: 800, easing: "easeInOutQuart" });
    });
  });
}

function scrollToLeft()
{
	if(i > 1) {
		i--;
		Velocity(featureScroller, { left: "+=33.33333%"}, { duration: 600, easing: "easeInOutQuart" });
	}
}

function scrollToRight() {
	if(i < 3) {
		Velocity(featureScroller, { left: "-=33.33333%"}, { duration: 600, easing: "easeInOutQuart" });
		i++;
	}
}

function initSticky() {
  stickyNav = document.getElementById("infoNav");
  stickyNavTop = stickyNav.offsetTop;

  window.addEventListener("scroll", sticky);
}

function sticky() {
  var scrollTop = window.scrollY;
  console.log(scrollTop, stickyNavTop);
  if(scrollTop > stickyNavTop) {
    stickyNav.className = "nav--info-sections sticky";
  } else {
    stickyNav.className = "nav--info-sections";
  }
}
