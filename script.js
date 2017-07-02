$(document).ready(function(){
  //scroll down
  $("#topMenuHome").click(function() {
    $('html, body').animate({
        scrollTop: $("#passionateDeveloper").offset().top
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


});
