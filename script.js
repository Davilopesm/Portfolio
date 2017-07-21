$(document).ready(function(){
  //scroll down
  $("#Home").click(function() {
    $('html, body').animate({
        scrollTop: $("#banner").offset().top
    }, 1000);
  });

  $("#About").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
  });

  $("#Resume").click(function() {
    $('html, body').animate({
        scrollTop: $("#resume").offset().top
    }, 1000);
  });

  $("#Skills").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 1000);
  });

  $("#Work").click(function() {
    $('html, body').animate({
        scrollTop: $("#work").offset().top
    }, 1000);
  });

  $("#Contact").click(function() {
    $('html, body').animate({
        scrollTop: $("#contato").offset().top
    }, 1000);
  });


  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 70,
    backSpeed: 70,
    startDelay: 1000,
    showCursor: false,
    loop: true,
    loopCount: Infinity
  });


  //MENUU ***********//
  $('#toggle-sidebar').click(function(){
    $('#flyoutMenu').addClass("show");
    $('#toggle-sidebar').css({'opacity' : '0'});
  });
  $("#flyoutMenu").click(function(){
    $("#flyoutMenu").removeClass("show");
    $('#toggle-sidebar').css({'opacity' : '0.8'});
  });


  //*  IMG WORK *********//


  $('#pradalServicos').click(function(){
    var img = $(this).attr("src");
    var appear_image = "<div id='appear_image_div'></div>";
    appear_image = appear_image.concat("<img id='appear_image' src='"+img+"' />");
    appear_image = appear_image.concat("<i class='fa fa-times' id='closeImg' ></i>")
    $('body').append(appear_image);

    $('#appear_image_div, #closeImg').click(function(){
      $('#appear_image_div').remove();
      $('#appear_image').remove();
      $('#closeImg').remove();
    });

  });

  if($(window).width() > 769){
    $('#pradalServicos').elevateZoom({
      easing: 'true',
      zoomFadeIn: 1000,
      zoomFadeOut: 1000,
      scrollZoom: true,
      responsive: true,
      loadingIcon: true
    });
  }   // It’s a tablet







});
