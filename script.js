var overlay = null;
var html = document.documentElement;

var interval = setInterval(function() {
  overlay = document.querySelector(".fancybox-overlay-fixed");
  if (overlay) {
    overlay.remove();
    html.classList.remove("fancybox-lock");
    clearInterval(interval);
  }
}, 100);

console.log("A COMERLA OVACIÓN!");
