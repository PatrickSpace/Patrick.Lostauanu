
window.addEventListener('load', () => {
    const preloader = document.querySelector('#cload');
    preloader.classList.add("load-finish");
})

$(document).ready(function () {
    document.getElementById("upid").onclick = function () {
        $(window).scrollTop(0);
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $(".up").addClass("up-act");
        } else {
            $(".up").removeClass("up-act");
        }
    });

    var largo = $('.imgproyecto').width();
    var alto = largo * 56.25 / 100;
    document.getElementsByClassName('imgproyecto').style.height = alto + "px";
    alert(alto);

});

