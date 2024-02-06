$(document).ready(function () {

    $(".info-icon").on("click", function () {
        $(".popup").addClass("open-popup");
        $(".close-overlay").addClass("open-popup");
    });

    $(".close-overlay").on("click", function () {
        $(".popup").removeClass("open-popup");
        $(this).removeClass("open-popup");
    });

});