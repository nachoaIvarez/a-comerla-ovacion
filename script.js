var overlays = document.querySelectorAll(".fancybox-overlay-fixed");
var htmls = document.querySelectorAll("html");

for (var i = 0; i < overlays.length; i++) {
  overlays[i].parentNode.removeChild(overlays[i]);
}

for (var j = 0; j < htmls.length; j++) {
  htmls[j].classList.remove("fancybox-lock");
}

console.log("A COMERLA OVACIÓN!");
