(function() {
// check window scrolling
function windowScroll() {
  window.addEventListener('scroll', function () {
  // check if y-scroll is more than 50px and add scroll class to body
  // else remove class
  document.body.classList[
    window.scrollY > 50 ? 'add': 'remove'
  ]('scrolled');
  });
}

window.onload = function() {
  // remove cover div with loading icon once page has loaded
  document.getElementById('window-loading-cover').style.visibility = 'hidden';
  windowScroll();
}
})()
