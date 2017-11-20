$(document).ready(function(){

  //NEEDED CONTENT
  var presidentPhotos = [
    'images/testimonials/drewGilpin.jpg',
    'images/testimonials/matthewWilson.jpg',
    'images/testimonials/PresidentWarren.jpg',
    'images/testimonials/michaelDrake.jpg',
    'images/testimonials/tomRoss.jpg',
    'images/testimonials/maxNikias.jpg'
  ];
  var presidentQuotes = [
    'Backhand has been a changing force on campus. It allows us to promote events to student that they otherwise would not have know about. Not to mention the activities such as tutoring that can be promoted so easily.',
    'This application has been great. We promote it to students during their orientation and they just love using it. I have been told by so many student that it helped them meet new students. The event system really helps spread word about campus activities',
    'I love Backhand. I honestly cannot think of a better system we have implemented during my time here. Since we have launched the application on campus, we have seen student communication and activities increase more than we have in years. It really helps students meet like-minded friends!',
    'Our students taking advantage of Backhand the semester that we introduced it. I myself have even managed to have a bit of fun with it. Every once in a while, I will find a pickup basketball game on the app and stop by to surprise students. Great application for students and faculty alike!',
    'Backhand has really boosted interaction around campus. Occassionally I will give the app a glace and it never ceases to amaze me all the activity I see around campus. Many of these events would have otherwise been promoted on bulletin boards...which students tend to not even give a glance.',
    'This system has been a great investment for all of our campuses. Being in California, students absolutely love to participate in outdoor activies...but students could have trouble joining in when they feel like they were not invited. Backhand really helps student with that problem'
  ];
  var presidents = [
    ['President Drew Gipline', 'Harvard, Massechusetts'],
    ['President Matthew Wilson', 'University of Akron, Ohio'],
    ['President Beverly Warren', 'Kent State University, Ohio'],
    ['President Michael Drake', 'The Ohio State University, Ohio'],
    ['President Tom Ross', 'The University of North Carolina, NC'],
    ['President Max Nikias', 'The University of Southern California, California']
  ];

  var campusColor = [
    '#A51C30', //crimson red
    '#deb408', //akron gold
    '#eaab00', //ksu gold\
    '#c2c2c2',  //OSU scarlett
    '#4B9CD3', //powder blue
    '#FFCC00'  //cardinal
  ];

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

function changeQuote(selection) {
  //Fade out current content
  // $('.presidentPhotoContainer').fadeOut(300);
  // $('.quote').fadeOut(300);

  //Change the content
  $('.presidentialImage').attr('src', presidentPhotos[selection]);
  $('#presName').text(presidents[selection][0]);
  $('#presCampus').text(presidents[selection][1]);
  $('#presQuote').text(presidentQuotes[selection]);

  //Change college color
  $('#presCampus').css('color', campusColor[selection]);
  $('.presidentialImage').css('border-color', campusColor[selection]);

  //delay(500);
  //$('.presidentPhotoContainer').fadeIn(500);
  // $('.quote').fadeIn(500);
}

  $('.testimonial').click(function(){
    var value = $(this).attr('id');
    changeQuote(value);
  });
  //TESTIMONIAL DROPDOWN EVENT HANDLER
  $('.testimonialDropdown').change(function(){
    var campusSelected = $(this).val();
    changeQuote(campusSelected);
  });



  //TESTIMONIAL MENU EVENT HANDLER

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
