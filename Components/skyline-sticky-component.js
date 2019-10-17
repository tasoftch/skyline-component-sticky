$(function() {
    function updateFooter($footer) {
        var footerHeight = $footer.outerHeight(true);

        var bottomEdge = $footer.position().top + footerHeight;

        if(bottomEdge < $(window).height()) {
            var flexibleHeightOffset = $flexible.attr("data-adjust") * 1;
            if(!flexibleHeightOffset)
                flexibleHeightOffset = $flexible.outerHeight(true) - $flexible.height();

            var fixedHeight = 0;
            $fixed.each(function() {
                fixedHeight += $(this).outerHeight(true);
            });
            console.log("Height: " + ($(window).height() - fixedHeight - footerHeight + flexibleHeightOffset) + "px");
            $flexible.css("min-height", ($(window).height() - fixedHeight - footerHeight + flexibleHeightOffset) + "px");
        } else {
            console.log("Reset Height");
            $flexible.css("min-height", "");
        }
    }

    var $footer = $(".sticky-bottom");
    var $flexible = $(".sticky-flexible");
    var $fixed = $(".sticky-fixed");

    var $flexibleOriginalHeight = 0;

    if($footer.length && $flexible.length) {
        $flexibleOriginalHeight = $flexible.outerHeight(true);
        $(window).resize(function() {
            updateFooter($footer);
        });
        updateFooter($footer);
    }

    // Add sticky top scroll observer
    var $stickyTopScrollers = $("[data-role='hold-top']");
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