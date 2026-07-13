$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    margin: 20,
    autoplayTimeout: 2000, // Adjust autoplay speed (in milliseconds)
    dots: true, // Enable navigation dots
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });
});
var accItem = document.getElementsByClassName("accordionItem");
var accHD = document.getElementsByClassName("accordionItemHeading");
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener("click", toggleItem, false);
}
function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = "accordionItem close";
  }
  if (itemClass == "accordionItem close") {
    this.parentNode.className = "accordionItem open";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('.nav-list > li a');

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      var checkbox = document.getElementById('nav-check');
      checkbox.checked = false; // Close the dropdown menu
    });
  });
});


  