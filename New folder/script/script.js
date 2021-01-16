$(document).ready(function() {
    var autoplaySlider = $('#autoplay').lightSlider({
        auto:false,
        item:4,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        loop:true,
        pauseOnHover: true,
        responsive : [
    {
        breakpoint:800,
        settings: {
            item:3,
            slideMove:1,
            slideMargin:6,
          }
    },
    {
        breakpoint:480,
        settings: {
            item:2,
            slideMove:1
          }
    }
],
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        }
    });
    $('#total').text(autoplaySlider.getTotalSlideCount());

});
