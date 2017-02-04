#Ruby101

#WARNING: this is meant for reference and not inteneded to be run, so errors are to be expected

#RUNNING RUBY
  #run Ruby program in Command Line --> ruby file.rb
  #open up IRB --> irb

#VARIABLES
  variable_string ="String"
  variable_number = 1
  variable_float = 23.4
  variable_boolean = false;

#STRING METHODS
  vs_length = variable_string.length #returns length of string
  vs_split = variable_string.split #splits string into an array composed of its characters
  vs_no_s = variable_string.sub("i", "u") #replaces any instances of "i" and replaces it with a "u"

#STRING INTERPOLATION EXAMPLE
  puts "This is #{variable_string} Interpolation"

#LOOPS
  #for-loop (general use/shorthand)
    5.times do #do the following 5 times
      puts "Hello" #display "Hello"
    end #end

  #for-loop (shorthand with range)
    (0..5).each do |i|
      puts "Hello, #{i}"
    end

  #for-loop (single instruction use)
    5.times{puts "Hello"}

  #for-loop (w/ parameter)
    5.times do|i|
      puts "#{i} Hello"
    end

  #for-in loop
    for i in (0..5) #for every instance of i in the range 0-5 (0..5) do the following
      put "Hello"
    end

    #for

  #while-loop
    while boolean_value == true do #so long as boolean_value is true repeat the following
      puts "Hello"
    end

  #do-while lopp
    begin #run the following at least once
      puts "Hello"
    end while boolean_value == true #then repeat this while boolean_value is true

  #until loop
    until boolean_value == false #execute the following until boolean_value is false
      puts "Hello"

  #do-until loop
    puts "Hello" until boolean_value == false #shorthand

    begin #long-hand
      puts "Hello"
    end until boolean_vale == false
