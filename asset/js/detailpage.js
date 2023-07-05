$(function(){

  $('.stage-area .link-search').click(function(e){
    e.preventDefault();
    $('.search-area').addClass('active')
  })


  $('.sc-total .total-order').click(function(e){
    e.preventDefault();
    $('.total-order, .total-pop').toggleClass('active')

  })

});