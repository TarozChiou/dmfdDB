function navtoggle() {
    document.querySelector(".navbar").classList.toggle("active"), document.querySelector("#navicon").classList.toggle("active")
}
$(window).on("scroll", function () {
    $(this).scrollTop() ? $("header").addClass("scrolled") : $("header").removeClass("scrolled")
});