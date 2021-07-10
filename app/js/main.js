$(function(){
$('.top-slider__inner').slick({
   dots: true,
   arrows: false,
   fade: true,
   autoplay: true,
   autoplaySpeed: 2000
});

$('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="4.969" height="9.97" viewBox="0 0 4.969 9.97"><path d="M973.64,3459.16a0.745,0.745,0,0,1,.178-0.49l3.741-4.28a0.548,0.548,0,0,1,.863,0,0.762,0.762,0,0,1,0,.98l-3.311,3.79,3.31,3.79a0.776,0.776,0,0,1,0,.99,0.56,0.56,0,0,1-.862,0l-3.741-4.28a0.772,0.772,0,0,1-.178-0.5h0Zm0,0" transform="translate(-973.625 -3454.19)"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="4.969" height="9.97" viewBox="0 0 4.969 9.97"><path d="M973.64,3459.16a0.745,0.745,0,0,1,.178-0.49l3.741-4.28a0.548,0.548,0,0,1,.863,0,0.762,0.762,0,0,1,0,.98l-3.311,3.79,3.31,3.79a0.776,0.776,0,0,1,0,.99,0.56,0.56,0,0,1-.862,0l-3.741-4.28a0.772,0.772,0,0,1-.178-0.5h0Zm0,0" transform="translate(-973.625 -3454.19)"/></svg></button>',
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
    // starSvg: ''
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
const svgSprite = require("gulp-svg-sprite");
});