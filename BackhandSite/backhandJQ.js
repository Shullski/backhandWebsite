$(document).ready(function(){

  //FADE & SLIDE IN IN MAIN CONTENT ON LOAD
  $('.mainContent').fadeIn(2000);
  $('.headlineWrapper').delay(500).animate({left:'50%'}, 1000);
  $('.imageWrapper').delay(500).animate({top:'30%'}, 1000);

  //SHOW MENU BAR
  $(document).scroll(function() {
    var position = $(this).scrollTop();
    if (position > 730) {
      $('.scrollMenu').fadeIn(200);
    }else{
      $('.scrollMenu').fadeOut(200);
    }
  });


  //ANIMATE IN APP PROTOYPE
  $('.showPrototype').click(function() {
    //Bouncy Button
    //$('.showPrototype').animate({bottom: '60%'},400);
    $('.showPrototype').animate({bottom: '-20%'},400);
    $(".appRow").css("height", "800px");
    $('.prototype').delay(400).animate({top: '55%'},600);
    $('.clearButton').delay(500).fadeIn('fast');
  });

  //ANIMATE OUT APP PROTOYPE
  $('.clearButton').click(function() {
    $(".appRow").css("height", "250px");
    $('.prototype').animate({top: '-150%'},200);
    $('.showPrototype').delay(400).animate({bottom: '50%'},400);
    $('.clearButton').fadeOut('fast');
  });


  // SMOOTH SCROLLING
  $(".campusesButton").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});
