$(document).ready(function() {
    var autoplaySlider = $('#autoplay').lightSlider({
        auto:false,
        loop:true,
        pauseOnHover: true,
        onBeforeSlide: function (el) {
            $('#current').text(el.getCurrentSlideCount());
        }
    });
    $('#total').text(autoplaySlider.getTotalSlideCount());
});
