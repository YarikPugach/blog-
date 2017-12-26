$(document).ready(function() {
  var $item = $('.popup__slider-slide');
  var $next = $('.next');
  var $prev = $('.prev');



  $('.slider__photo').click(function() { 
    $('.overlay').fadeIn();
    $item.eq($(this).index()).addClass('active');
      
  });

  $('.popup__close').click(function() {
    $('.overlay').fadeOut();
    
    $item.siblings().removeClass('active');

  });

  $(document).mouseup(function(e) {
    var popup = $('.js-popup');
    if (e.target !== popup[0] && popup.has(e.target).length === 0) {
      $('.overlay').fadeOut();
      $item.siblings().removeClass('active');

    }
  });



  $next.click(function() {
    var index = $item.filter('.active').index();
    if(index === $item.length - 1) {
      index = -1;
    }
    $item.eq(index + 1).addClass('active').siblings().removeClass('active');
  });

  $prev.click(function() {
    var index = $item.filter('.active').index();
    if(index === $item.length + 1) {
      index = $item.length;
    }
    $item.eq(index - 1).addClass('active').siblings().removeClass('active');
  });

});
