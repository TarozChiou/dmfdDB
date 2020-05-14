const body = document.getElementsByTagName('body')[0];
var weapons = document.querySelectorAll("#weapons"),
    grid = document.querySelectorAll(".grid");

var grid50 = document.querySelectorAll(".grid50"),
    grid60 = document.querySelectorAll(".grid60"),
    grid70 = document.querySelectorAll(".grid70"),
    grid80 = document.querySelectorAll(".grid80"),
    grid90 = document.querySelectorAll(".grid90"),
    grid100 = document.querySelectorAll(".grid100");

function levelSelector() {
    var levelSelect = document.getElementById("levelSelect").value;

    if (levelSelect === "lv70") {
        for (var i = 0; i < grid70.length; i++) {
            grid70[i].setAttribute('class', 'grid70 show');
        }

        for (var i = 0; i < grid50.length; i++) {
            grid50[i].setAttribute('class', 'hide-more');
        }

        for (var i = 0; i < grid60.length; i++) {
            grid60[i].setAttribute('class', 'hide-more');
        }

        for (var i = 0; i < grid80.length; i++) {
            grid80[i].setAttribute('class', 'hide-more');
        }

        for (var i = 0; i < grid90.length; i++) {
            grid90[i].setAttribute('class', 'hide-more');
        }

        for (var i = 0; i < grid100.length; i++) {
            grid100[i].setAttribute('class', 'hide-more');
        }
    } 
    else if (levelSelect === "lv80") {
        for (var i = 0; i < grid80.length; i++) {
            grid80[i].setAttribute('class', 'grid80 show');
        }

        for (var i = 0; i < grid50.length; i++) {
            grid50[i].setAttribute('class', 'hide-more');
        }

        for (var i = 0; i < grid60.length; i++) {
            grid60[i].setAttribute('class', 'hide-more');
        }

        for (var i = 0; i < grid70.length; i++) {
            grid70[i].setAttribute('class', 'hide-more');
        }

        for (var i = 0; i < grid90.length; i++) {
            grid90[i].setAttribute('class', 'hide-more');
        }

        for (var i = 0; i < grid100.length; i++) {
            grid100[i].setAttribute('class', 'hide-more');
        }
    } 
    else if (levelSelect === "lv90") {
        for (var i = 0; i < grid90.length; i++) {
            grid90[i].setAttribute('class', 'grid90 show');
        }

        for (var i = 0; i < grid50.length; i++) {
            grid50[i].setAttribute('class', 'hide-more');
        }

        for (var i = 0; i < grid60.length; i++) {
            grid60[i].setAttribute('class', 'hide-more');
        }

        for (var i = 0; i < grid70.length; i++) {
            grid70[i].setAttribute('class', 'hide-more');
        }

        for (var i = 0; i < grid80.length; i++) {
            grid80[i].setAttribute('class', 'hide-more');
        }

        for (var i = 0; i < grid100.length; i++) {
            grid100[i].setAttribute('class', 'hide-more');
        }
    } 
    else if (levelSelect === "lv100") {
        for (var i = 0; i < grid100.length; i++) {
            grid100[i].setAttribute('class', 'grid100 show');
        }

        for (var i = 0; i < grid50.length; i++) {
            grid50[i].setAttribute('class', 'hide-more');
        }

        for (var i = 0; i < grid60.length; i++) {
            grid60[i].setAttribute('class', 'hide-more');
        }

        for (var i = 0; i < grid70.length; i++) {
            grid70[i].setAttribute('class', 'hide-more');
        }

        for (var i = 0; i < grid80.length; i++) {
            grid80[i].setAttribute('class', 'hide-more');
        }

        for (var i = 0; i < grid90.length; i++) {
            grid90[i].setAttribute('class', 'hide-more');
        }
    } 
    else {
        for (var i = 0; i < grid100.length; i++) {
            grid100[i].setAttribute('class', 'grid100 show');
        }

        for (var i = 0; i < grid70.length; i++) {
            grid70[i].setAttribute('class', 'grid70 show');
        }

        for (var i = 0; i < grid80.length; i++) {
            grid80[i].setAttribute('class', 'grid80 show');
        }

        for (var i = 0; i < grid90.length; i++) {
            grid90[i].setAttribute('class', 'grid90 show');
        }
    }
}
