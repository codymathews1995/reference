//jQuery 101

//Library of commonly used JS widgets/functions

/* An HTML document structured according to Document Object
Model (DOM) in a hierarchical way, and by interacting w/ DOM that jQuery is able to
access and modify HTML */

//Linking from HTML (place near end of body)
  <script type="text/javascript" src="script.js"></script>

//TARGETING
  $('.button').someAction //targets the .button class in the HTML file and performs someAction

//VARIABLES
var num = 6; //integer
var word = "string"; //string
var $p = $('p'); //jQuery selector for the <p> HTML element


//PREPARING & FUNCTIONS
  $(document).ready(function(){ //tells jQuery to get ready to perform some function on the HTML document
    //jQuery functions

    $('div').mouseenter(function(){ //whenever the mouse enters a div
      $('div').hide(); //make the div invisible
    });

    $('div').mouseleave(function(){//whenver the mouse leaves a div
      $('div').fadeTo('fast', 0.25); //fade the div at a 'fast' rate to 25% opacity
    });

    $('div').click(function()){ //whenever the user clicks on a div
      $('div').fadeOut('slow');
    });

  });

// LEFT OFF AT https://www.codecademy.com/en/courses/web-beginner-en-GfjC6/0/4?curriculum_id=50a3fad8c7a770b5fd0007a1
