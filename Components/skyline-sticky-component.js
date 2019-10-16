$(function() {
    function updateFooter($footer) {
        var footerHeight = $footer.outerHeight(true);

        var bottomEdge = $footer.position().top + footerHeight;

        if(bottomEdge < $(window).height()) {
            var flexibleHeight = $flexible.outerHeight(true);
            var fixedHeight = 0;
            $fixed.each(function() {
                fixedHeight += $(this).outerHeight(true);
            });

            $flexible.css("height", ($(window).height() - fixedHeight - footerHeight) + "px");
        } else {
            $flexible.css("height", undefined);
        }
    }

    var $footer = $(".sticky-bottom");
    var $flexible = $(".sticky-flexible");
    var $fixed = $(".sticky-fixed");

    if($footer.length && $flexible.length) {
        $(window).resize(function() {
            updateFooter($footer);
        });
        updateFooter($footer);
    }

    // Add sticky top scroll observer
    var $stickyTopScrollers = $(".sticky-fixed[data-role='hold-top']");
    if($stickyTopScrollers.length) {
        $( window ).scroll( function(evt) {
            var st = $(window).scrollTop();

            $stickyTopScrollers.each(function() {
                var offset = $(this).attr("data-offset");
                if(!offset)
                    offset = 10;

                var dataClass = $(this).attr("data-toggle-class");
                if(!dataClass)
                    dataClass = 'nav-collapse';

                if(st > $(this).position().top + offset)
                    $(this).addClass( dataClass );
                else
                    $(this).removeClass( dataClass );
            });

        } );
    }
});