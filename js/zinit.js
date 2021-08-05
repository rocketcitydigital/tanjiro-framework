
$('#navTrigger').on('click', function(){
  $('nav').addClass('active');
});

$('#navClose').on('click', function(){
  $('nav').removeClass('active');
});

$('.navToggle').on('click', function(){
  $(this).toggleClass('active');
  $(this).next('ul').slideToggle();
});


$('#imgSwapLogoTwo img').on('click', function(){
  $('#imgSwapLogoTwo img').removeClass('img-active');
  $(this).addClass('img-active');
  var file = $(this).data('name');
  $('#logoStepTwo').attr('src', 'assets/logos/big/'+file+'.jpg');
});


$('#imgSwapBrandThree img').on('click', function(){
  $('#imgSwapBrandThree img').removeClass('img-active');
  $(this).addClass('img-active');
  var file = $(this).data('name');
  $('.logoStepThree').attr('src', 'assets/brand-assets/big/'+file+'.jpg');
});
