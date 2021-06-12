$(function(){
$('.top-slider__inner').slick({
    
});

$('.filter-price__input').ionRangeSlider({
  type: "double",
  prefix: "$",
onStart: function (data){
  $('.filter-price__from').text(data.from);
  $('.filter-price__to').text(data.to);
},
  onChange: function (data) {
    $('.filter-price__from').text(data.from);
    $('.filter-price__to').text(data.to);
},
});

$(".star").rateYo({
    
    starWidth: "17px",
    normallFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true
  });

  $('.select-style').styler();

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function(){
    $('.product-item').addClass('product-item--list')
  });

  $('.button-grid').on('click', function(){
    $('.product-item').removeClass('product-item--list')
  });

});