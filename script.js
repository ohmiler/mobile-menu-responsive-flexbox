$('.menu-wrapper li').on('click', function() {

    var $this = $(this);
    console.log($this);

    $('.menu-wrapper li').removeClass('active');
    $this.addClass('active');
})