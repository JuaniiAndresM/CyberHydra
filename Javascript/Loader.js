$( document ).ready(function(){
    $('#header').load('/CyberHydra/Page/header.html');
    $('#footer').load('/CyberHydra/Page/footer.html');

});

function burger_menu(x) {
    x.classList.toggle("change");

    if (document.getElementById("links-mobile").style.transform == "translateY(0%)") {
        document.getElementById("links-mobile").style.transform = "translateY(-120%)";
        document.body.style.overflowY = "scroll";
        document.getElementById("arrow").style.display = "flex";
    } else {
        document.getElementById("links-mobile").style.transform = "translateY(-0%)";
        document.body.style.overflowY = "hidden";
        document.getElementById("arrow").style.display = "none";
    }
}