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

    $('div').hover(function(){ //when the user hovers over the div, perform an action
      //action
    });

    $('div').dblclick(function(){ //when the user double clicks on the div, perform an action
      //action
    });

    $('div').focus(function(){ //when the div is in focus, perform some action
      //action
    });

    $('div').keydown(function(key){ //when the div has focus and a key is pressed
      switch(parseInt(key.which, 10)){
        case 37://when the left arrow key is pressed
          $(this).animate({left:'-=10px'},'fast'); //move div to the left
          break;
        case 38: //when the up arrow key is pressed
          $(this).animate({top:'-=10px'},'fast'); //move div up
          break;
        case 39: //when the right arrow key is pressed
          $(this).animate({left:'+=10px'},'fast'); //move div to the right
          break;
        case 40: //when the down arrow key is pressed
          $(this).animate({top:'+=10px'},'fast'); //move div down
          break;
      });
    });


    //Creating HTML elements
    $p = $("<p>I am a new paragraph!</p>");
    $(".element").append("<p>Stuff</p>"); //inserts element as last child of target class
    $(".element").prepend("<p>Stuff</p>"); //inserts element as first child of target class
    $("<p>Stuff</p>").appendTo(".element"); //inserts element as last child of target class (reverse order of .append())
    $("<p>Stuff</p>").prependTo(".element"); //inserts element as first child of target class (reverse order of .prepend())
    $('.element').after('<p>Stuff</p>'); //adds a paragraph element after the element class
    $('.element').before('<p>Stuff</p>'); //adds a paragraph element before the element class

    //Removing HTML elements
    $(".element").empty(); //deletes element's content and ALL ITS DESCENDANTS
    $(".element").remove(); //deletes element's content and element itself

    //Modifying HTML elments
    $("selector").addClass('className'); //adds a class name to the given element
    $("selector").removeClass('className'); //removes a class name from the given elements
    $("selector").toggleClass("className"); //toggles the effects of a class name from on/off to an element
    $(".element").css("css-command","value"); //applies a CSS statement to the element
    $(".element").html("Html Value"); //sets content inside the first element of this element type it finds
    $(".formElement").val(); //gets the value of first instance of a form element
    $("selector").on('event', 'selector', function() { //upon an event on a given selector perform the following function
      //action
    });

    //Effects
    $(".element").click(function(){ // when the .element is clicked upon
      $(this).effect('explode');  //perform the explode effect
      $(this).effect('bounce', {times:2}, 200); //perform the bounce effect 2 times for 200 milliseconds
      $(this).effect('slide'); //perform the slide effect
    });

    $('.element').draggable(); //set an element to be dragged around the screen
    $('.element').resizable(); //set an element to be resized
    $('.element').selectable(); //set an element to be selected
    $('.element').sortable(); //set an element to be sorted
    $('.element').according(); //sets an element to be an accordion menu

  )};
