// horizontal scrollspy
var scrollElement = document.querySelector('#scroll');
window.addEventListener('scroll', function(){
  var height = document.body.scrollHeight - this.innerHeight;
  var scrolledPixels = this.scrollY;
  var width = ((scrolledPixels / height) * 100).toFixed(2);
  scrollElement.style.width = width + '%';
});

// back to top button
let toTopBtn = document.getElementById("btn-back-to-top");
toTopBtn.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const popover = new bootstrap.Popover('.popover-dismiss', {
  trigger: 'focus'
})