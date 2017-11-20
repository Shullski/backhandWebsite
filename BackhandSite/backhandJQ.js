$(document).ready(function(){

  //FADE & SLIDE IN IN MAIN CONTENT ON LOAD
  $('.mainContent').fadeIn(2000);
  $('.headlineWrapper').delay(500).animate({left:'50%'}, 1000);
  $('.imageWrapper').delay(500).animate({top:'30%'}, 1000);

  function jumbotronInView() {
    var position = $(this).scrollTop();
    jumbrotronHeight = $('.jumbotron').height();
    var correctedOffset = jumbrotronHeight - 70;
    if (correctedOffset > position) {
      return true;
    }else{
      return false;
    }
  }

  //EXPAND/COLLAPSE TOP MENU
  $('.container').click(function() {
    if (!($('.scrollMenu').hasClass('toggled'))) {
      $('.scrollMenu').css('height', '100vh');
      $('.scrollMenu').addClass('toggled');
    }else{
      if (!jumbotronInView()) {
        $('.scrollMenu').css('height', '80px');
      }else{
        $('.scrollMenu').css('height', '0px');
      }
      $('.scrollMenu').removeClass('toggled');
    }
  });

  //SHOW MENU BAR
  $(document).scroll(function() {
    var position = $(this).scrollTop();
    jumbrotronHeight = $('.jumbotron').height();
    var correctedOffset = jumbrotronHeight - 70;
    if (!($('.scrollMenu').hasClass('toggled'))) {
      if (position > correctedOffset) {
        $('.scrollMenu').css('height', '80px');
      }else{
        $('.scrollMenu').css('height', '0px');
      }
    }
  });

  //ANIMATE IN APP PROTOYPE
  $('.showPrototype').click(function() {
    //Bouncy Button
    //$('.showPrototype').animate({bottom: '60%'},400);
    $('.showPrototype').animate({bottom: '-20%'},400);
    $(".appRow").css("height", "650px");
    $('.prototype').delay(400).animate({top: '55%'},600);
    $('.clearButton').delay(500).fadeIn(1000);
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
