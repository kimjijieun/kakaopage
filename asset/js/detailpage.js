$(function(){


  //search-area
  $('.stage-area .link-search').click(function(e){
    e.preventDefault();
    $('.search-area').addClass('active')
  })

  //추천
    $('.sc-total .total-order').click(function(e){
      e.preventDefault();
      $('.total-order, .total-pop').toggleClass('active')
      // alert(1);
    })

});