$(document).ready(function() {

    $(window).scroll(function() {
        $(".hamburger").removeClass("active");
        $(".nav-menu").removeClass("active");
        $(".navbar").removeClass("active");
        
        var scrollPos = $(document).scrollTop();
        $('.nav-link').each(function () {
            try {
                var refElement = $($(this).attr("href"));
            } catch {
                return;
            }
            
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.outerHeight() > scrollPos) {
                $('.nav-link').removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
        
        if (scrollPos >= 500) {
            $(".navbar").addClass("active2");
        } else {
            $(".navbar").removeClass("active2");
        }
    });
    
    var scrollPos = $(document).scrollTop();
    $('.nav-link').each(function () {
        try {
            var refElement = $($(this).attr("href"));
        } catch {
            return;
        }
        
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.outerHeight() > scrollPos) {
            $('.nav-link').removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    }); 


    $(".hamburger").click(function() {
        $(".hamburger").toggleClass("active");
        $(".nav-menu").toggleClass("active");
        $(".navbar").toggleClass("active");
    });



    $(".container").each(function() {
        $(this).click(function() {
            $(".hamburger").removeClass("active");
            $(".nav-menu").removeClass("active");
            $(".navbar").removeClass("active");
        });
    });

});
