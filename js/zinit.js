
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
