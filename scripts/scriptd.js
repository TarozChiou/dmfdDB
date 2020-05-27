// const body = document.getElementsByTagName("body")[0];
var lists = document.querySelectorAll(".lists");

var ogreF = document.getElementById("ogreF"),
    sot = document.getElementById("sot"),
    ud = document.getElementById("ud"),
    mfd = document.getElementById("mfd");

function questSelector() {
    var t = document.getElementById("questSelect").value;
    console.log(t);

    for (var i = 0; i < lists.length; i++) {
        lists[i].classList.add("hide");
    }

    if (t === "all") {
        for (var i = 0; i < lists.length; i++) {
            lists[i].classList.remove("hide");
        }
    } else if (t === "ogreF") {
        ogreF.classList.remove("hide");
    } else if (t === "sot") {
        sot.classList.remove("hide");
    } else if (t === "ud") {
        ud.classList.remove("hide");
    } else if (t === "mfd") {
        mfd.classList.remove("hide");
    } 
}