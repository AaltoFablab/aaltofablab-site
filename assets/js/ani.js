var i;
var n;
var featureScroller;
var anchors;
var stickyNav;
var stickyNavTop;

document.onkeydown = function(e) {
  if(window.innerWidth < 768)
  {
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
  }
};

window.onload = function() {
	initScroller();
  initSticky();
};

function initScroller() {
	i = 1;
	featureScroller = document.querySelectorAll("#featureScroller");
  n = document.querySelectorAll('.scrollElement').length;
  anchors = document.querySelectorAll('a[href^="#"]');
  anchors = [].slice.call(anchors);
  anchors.forEach( function(anchor) {
    var targetName = anchor.href.substring(anchor.href.lastIndexOf('#') + 1);
    var target = document.getElementById(targetName);
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      Velocity(target, "scroll", { duration: 800, easing: "easeInOutQuart" });
      return false
    });
  });
}

function scrollToLeft()
{
	if(i > 1) {
		i--;
		Velocity(featureScroller, { left: "+=100%"}, { duration: 600, easing: "easeInOutQuart" });
	}
}

function scrollToRight() {
	if(i < n) {
		Velocity(featureScroller, { left: "-=100%"}, { duration: 600, easing: "easeInOutQuart" });
		i++;
	}
}

function initSticky() {
  stickyNav = document.getElementById("infoNav");

  if(stickyNav != undefined) {
    stickyNavTop = stickyNav.offsetTop;
    window.addEventListener("scroll", sticky);
    sticky();
  }
}

function sticky() {
  var scrollTop = window.scrollY;

  if(scrollTop > stickyNavTop) {
    stickyNav.className = "nav--info-sections sticky";
  } else {
    stickyNav.className = "nav--info-sections";
  }
}

function open() {
  var menuIcon = document.getElementById("siteNavTrigger");
  var menuList = document.getElementById("siteNavList");

  if(siteNavTrigger.className == "menu-icon open") {
    siteNavTrigger.className = "menu-icon";
    siteNavList.className = "trigger";
  } else {
    siteNavTrigger.className = "menu-icon open";
    siteNavList.className = "trigger open";
  }
}
