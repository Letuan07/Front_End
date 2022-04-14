function OpenHeaderFixed() {
    // console.log(document.getElementById("headerFixed"))
    var HeaderFixed = document.getElementById("headerFixed");
    HeaderFixed.style.transform = "translateX(0)";
    // HeaderFixed.style.visibility = "visible";
    HeaderFixed.style.transition = "all .3000s ease-in-out";

    document.getElementById("iconClose").classList.add('active');
    document.getElementById("iconOpen").classList.remove('active');
}
function CloseHeaderFixed() {
    var HeaderFixed = document.getElementById("headerFixed");
    HeaderFixed.style.transform = "translateX(100%)";
    // HeaderFixed.style.visibility = "hidden";
    HeaderFixed.style.transition = "all .3000s ease-in-out";

    document.getElementById("iconOpen").classList.add('active');
    document.getElementById("iconClose").classList.remove('active');
}


