(function() {
// check window scrolling
function windowScroll() {
  window.addEventListener('scroll', function () {
  /* check if y-scroll is more than 50px and add scroll class to body
     else remove class */
  document.body.classList[
    window.scrollY > 50 ? 'add': 'remove'
  ]('scrolled');
  });
}

/* Scroll to an element within the given duration */
function scroll(element, toPosition, duration) {
  if(duration <= 0) { return; }
  /* scrollTop measures how far the element has been scrolled */
  var distance = toPosition - element.scrollTop;
  /* calculate increment */
  var tick = distance / duration * 10;

  setTimeout(function() {
    element.scrollTop += tick;
    scroll(element, toPosition, duration - 10);
  }, 10);
}

// Add smooth scrolling to navigation links
function addListenersToNavLinks() {
  var navLinks = document.querySelectorAll(".navigation__list__item a");
  Array.apply(null, navLinks).forEach(function(link) {
    link.addEventListener("click", function(e) {
        /* Prevent default browser behaviour */
        e.preventDefault();
        /* Get id name without # for each link */
        var target = document.getElementById(link.getAttribute("href").slice(1));
        /* Check if the browser is Firefox, in which case documentElement is used to select the html document */
        var element = navigator.userAgent.indexOf("Firefox") > -1 ? document.documentElement : document.body;
        scroll(element, target.offsetTop, 200);
      });
  });
};

window.onload = function() {
  /* remove cover div with loading icon once page has loaded */
  document.getElementById('window-loading-cover').style.visibility = 'hidden';
  /* check window scrolling to control navigation opacity */
  windowScroll();
  /* Add smooth scrolling to click event listeners for all navigation links */
addListenersToNavLinks();
}
})()
