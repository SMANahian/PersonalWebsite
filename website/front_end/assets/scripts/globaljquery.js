// Defining functions
function navToggle() {
    $(".hamburger").toggleClass("active");
    $(".nav-menu").toggleClass("active");
    $(".navbar").toggleClass("active");
};
function navCollaps() {
    $(".hamburger").removeClass("active");
    $(".nav-menu").removeClass("active");
    $(".navbar").removeClass("active");
};
function navActivationToggle() {
    var scrollPos = $(document).scrollTop();
    $('.nav-link').each(function () {
        var refElement = $($(this).attr("href").match("#.*$")[0]);
        if (refElement.length) {
            if (refElement.position().top <= (scrollPos + $(".navbar").outerHeight()) && refElement.position().top + refElement.outerHeight() > scrollPos + $(".navbar").outerHeight()) {
                $('.nav-link').removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        }
    });

    if (scrollPos >= ($("#home").outerHeight() - $(".navbar").outerHeight())) {
        $(".navbar").addClass("active2");
    } else {
        $(".navbar").removeClass("active2");
    }
};


$(document).ready(function () {
    $(window).scroll(function () {

        navCollaps();
        navActivationToggle();

    });

    navCollaps();
    navActivationToggle();

    $(".hamburger").click(navToggle);

    $(".container").each(function () {
        $(this).click(navCollaps);
    });

});
