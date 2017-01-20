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
var $p = $('p'); //jQuery selector for the <p> HTML element ($ is not necessary, just naming convention)

//PREPARING & FUNCTIONS
  $(document).ready(function() { //tells jQuery to get ready to perform some function on the HTML document
    //jQuery functions
    $('div').mouseenter(function() { //whenever the mouse enters a div
      $('div').hide(); //make the div invisible
    });

    $('div').mouseleave(function() {//whenver the mouse leaves a div
      $('div').fadeTo('fast', 0.25); //fade the div at a 'fast' rate to 25% opacity
    });

    $('div', 'li').click(function() { //whenever the user clicks on a div and/or a li
      $('div').fadeOut('slow');//fade the div out slowly
      $('li').fadeIn('slow');//fade the li in slowly
    });
    
    $('div').click(function() { // whenever the user clicks on a div
      $(this).fadeOut('slow'); // only that div will fade out slowly
    });

    $('section').click(function(){ //when the user clicks on a section
       $('div').slideToggle('slow'); //the div will slowly slide open and can be clicked to slide closed
    }); 
    
    //Creating HTML elements
    $p = $("<p>I am a new paragraph!</p>");
    $(".element").append("<p>Stuff</p>"); //inserts element as last child of target class
    $(".element").prepend("<p>Stuff</p>"); //inserts element as first child of target class
    $("<p>Stuff</p>").appendTo(".element"); //inserts element as last child of target class (reverse order of .append())
    $("<p>Stuff</p>").prependTo(".element"); //inserts element as first child of target class (reverse order of .prepend())
    $('.element').after('<p>Stuff</p>'); //adds a paragraph element after the element class
    $('.element').before('<p>Stuff</p>'); //adds a paragraph element before the element class
    
    //https://www.codecademy.com/courses/web-beginner-en-v6phg/0/5?curriculum_id=50a3fad8c7a770b5fd0007a1
    
    
  });