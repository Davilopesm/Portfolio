$(document).ready(function(){

  $(".fa-times").click(function(){
    $(".dropdownMenu").addClass("escondeMenu");
    $(".barMenu").addClass("opacidadeUm");
  });

  $(".barMenu").click(function(){
    $(".dropdownMenu").removeClass("escondeMenu");
    $(".barMenu").removeClass("opacidadeUm");
  });

  //scroll down
  $("#topMenuHome").click(function() {
    $('html, body').animate({
        scrollTop: $("#imgHTML").offset().top
    }, 1000);
  });

  $("#topMenuAbout").click(function() {
    $('html, body').animate({
        scrollTop: $("#About").offset().top
    }, 1000);
  });

  $("#topMenuResume").click(function() {
    $('html, body').animate({
        scrollTop: $("#Resume").offset().top
    }, 1000);
  });

  $("#topMenuSkills").click(function() {
    $('html, body').animate({
        scrollTop: $("#Skills").offset().top
    }, 1000);
  });

  $("#topMenuContact").click(function() {
    $('html, body').animate({
        scrollTop: $("#Contact").offset().top
    }, 1000);
  });

  //RESPONSIVE
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $("#div1").hide();
      $(".barMenu").hide();
    }
    else {
      $("#div1").show();
      $(".barMenu").show();
    }
  });


});
