$(window).on("scroll", function () {
    if ($(this).scrollTop()) {
        $("header").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");
    }

});

function navtoggle() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
    var navicon = document.querySelector("#navicon");
    navicon.classList.toggle("active");
}