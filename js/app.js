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

window.onload = windowScroll;
