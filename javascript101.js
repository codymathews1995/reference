//Welcome to JavaScript 101

/* JavaScript is NOT JAVA, it is the scripting language that makes up web browsers
It is used in web servers, browser addons/extensions, mobile applications, Databases consoles, OpenOffice scripts/macros, and Java apps */

//SYNTAX --> Case-sensitive, lines end w/ ;, blocks opened/closed w/ { and }

//VARIABLES & TYPES

//Typing is dynamic, NO type declaration before variable names
 var integer = 1;
 var float = 2.0;
 var string = "String";
 var boolean = true; //true or false
 var undf = null; //can also be assigned undefined
 var array = new Array(3);
 var array2 = ["the", 1, true];
 var object = new Object(integer);

 //Arrays
 var readWrite = array2[0]; //reads the zeroth element from array2 and assigns it to this array2
 var array2Length = array2.length; //stores the length of readWrite into array2Length
 var example = ["follow", "the", "white", "rabbit"];

 var b = example.pop(); //removes last element from example and stores it into b
 var c = example.push("RABBIT"); //adds an element at the end of example and stores the new length in c
 var d = example.shift(); //removes the first element from example and stores it into d
 var e = example.unshift("FOLLOW"); // adds an element at the beginning of example and stores the new length in e
 var f = example.splice(2,1); //removes the elements from element 2 to element 1 and stores it into f
 var g = example.splice(1, 2, "ME"); //removes elements between the 1st and 2nd and adds "ME" in example, and stores the removed elements in g

 //Operators
 var add = 4+4; //8
 var subtract = 9-4; //5
 var multiply = 9*9; //81
 var divide = 81/9; //9
 var modulus = 10%3; //1

 var incrementAfter = ++add; //9
 var incrementBefore = add++; //8
 var decrementAfter = --subtract; //7
 var decrementBefore = subtract--; //8

 var concatenation = "String " + "Addition"; //"String Addition"
 var equality = "2" == 2; //true
 var strictEquality = "2"===2; //false, always use this
 var greaterThan = 2 > 2; //false
 var greaterThanEqualTo == 2 >= 2; //true
 var lessThan = 2 < 2; //false
 var lessThanEqualTo = 2 <= 2; //true
 var and = true && false; //false
 var or = true || false; //true
 var not = !true; //false

 var exampleIn = [1,9,4];
 var isIn = (2 in exampleIn); // isIn = true
 var typeOfVar = typeof(add); //"number"
 var stringToNum = Number("10"); //10
 var floatToNum = parseInt(10.2); //10
 var stringToFloat = parseFloat("10.2"); //10.2
 var typeToString = String(10); //"10"
 var typeToString2 = (10).toString(); //"10"

 var implicitStringToNum1 = +"10"; //10
 var implicitStringToNum2 = "10" >> 0; //10
 var implicitStringToNum3 = "10" * 1; //10
 var implicitStringToNum4 = ~~"10"; //10
 var implicitStringToNum5 = "2"*"5"; //10 (both strings convert to numbers)

 var implicitNumToString1 = 10 + "10"; //"1010"

 var implicitNumToBoolean1 = !!"0"; //true

//STATEMENTS
var test;
  //if-else statement
  if(test == null ){
    test="new";
  }else{
    test ="old";
  }
  //if-else statement (tertiary)
  var user = (test == null) ? 'default user' : test;

  //switch statement
  var switchTest;
  var switchLoop;
  switch(switchLoop){
    case '1':
      switchTest = true;
      break;
    case '2':
      switchTest = false;
      break;
    default:
      switchTest = false;
      break;
  }

//LOOPS

  //for loops
  for(var loopCounter = 0; loopCounter < 10; loopCounter++){
    //doSomething();
  }

  //while loops
  var whileCount = 0;
  while(count < 10){
    //doSomething();
    whileCount++;
  }

  //do-while loops
  var doWhileCount = 100;
  do{
    //doSomething();
  }while(--count>0);

  //for..in loops
  var forInLoopArray = [123, 456, 789];
  for (var i in a){
    //doSomething(a[i]);
  }

//FUNCTIONS

  function functionName(var1, var2, var3){
    //some code
    return returnVal;
  }

//BROWSER ENVIRONMENT
  //<script src="myscript.js"></script> (LOCATED IN THE BOTTOM OF THE BODY TAG IN HTML)
