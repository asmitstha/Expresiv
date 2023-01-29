$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 150) {
      $("#header").addClass("filter-blur");
      $("#header").removeClass("py-3");
  } else {
      $("#header").removeClass("filter-blur");
      $("#header").addClass("py-3");
  }
});

new kursor({
    type: 4,
    color: '#FF5E5E'
});

$(".btn, .service-list").hover(
    function () {
        $(".kursor").addClass("--hover");
    }, function () {
        $(".kursor").removeClass("--hover");
    }
);


const d = new Date();
let year = d.getFullYear();
document.getElementById("thisYear").innerHTML = year;

