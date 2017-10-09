
        JSAutoComplete JavaScript Library

        Created 2006, James Melanson, jmelanson1965@gmail.com

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation; either version 2 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  CONTENTS OF README FILE:
  
  1.) Overview
  2.) Implementation
      i    What files to use.
      ii   Linking to the files.
      iii  Instantiating the auto-complete object
            a.) Instantiating multiple auto-complete objects
      iv   Defining the list of words to test against.
            a.) Adding an array (list) of words/phrases.
            b.) Adding single words/phrases.
            c.) Removing a word/phrase from the object.
      v    Ignoring Case
      vi   Accessing the objects list of words.
      vii  Counting words in the object.
      v    Using the auto-complete object.
  3.) Full Property & Method List
  4.) Samples of instantion, property assignment and working sliders
  5.) Debugging
  6.) Support


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>

  OVERVIEW

  In windows programs we are familiar with seeing auto-complete fields (also called
  auto-suggest fields). You start typing and the program anticipates what you are
  going to type and prompts for the characters after your cursor.

  While this has been possible in web pages through custom coding, it has been something
  that still makes you bend your head around and in most cases, you could only have
  one on a page.

  I have created the JSAutoComplete library to do two things. First it is created for
  ease of implementation, three lines of code and one event added to your text field.
  Thats it. The second reason is that this OOP-ish approach will allow you to have
  multiple auto-complete boxes on the page.

  I originally developed this for a solution to a project I was working on a few
  years ago but the project never was completed (their decision, not mine). So as
  a result, I can now offer this object library to facilitate your creation of more
  dynamic web pages!

  This Library has been written to work in IE, Opera, Firefox and Chrome. I have
  no access to an Apple to test Safari so feedback would be appreciated.


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  IMPLEMENTATION - WHAT FILES TO USE.

  The files that you need to implement this with your web page are:

  autocomplete.js


  If you are developing locally, on your desktop, simply save the files to the same
  project folder as the page you are implementing them on.

  For live implementation, FTP the files in ASCII mode (not Binary) to the web server.

  The browsers that these libraries support are:

  Chrome 61+
  IE 5.5+ (Possibly some builds of IE5.0, not sure about IE 7.*)
  Firefox 1.5+
  Netscape 8.0 (Possibly earlier versions as well - Does it still exist?)
  Opera 7+

<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>

  IMPLEMENTATION - LINKING TO THE FILES.

  The auto-complete library file has been written to support the four browsers above.
  There are no browser specific files.

  The code below shows you how to link to the files. Remember that this code MUST
  come before any other references to the auto-complete object you will be creating.

  Inside the <head></head> tags of the web page you are implementing the auto-complete on,
  copy and past the following code inside the snippet blocks:

  [-- Start Snippet --]

<script language="JavaScript" src="autocomplete.js"></script>

  [--  End Snippet --]


  If you are calling the library files from a different folder, make sure you change the "src"
  attribute to a relative path or full URL.

  **It would be preferable that you paste the above code BEFORE ANY OTHER IN-LINE JAVASCRIPT.


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  IMPLEMENTATION - INSTANTIATING THE AUTO-COMPLETE OBJECT

  After implementing the above, we now move on to instantiating (creating) the auto-complete object.

  The following line of code is what we use to create the auto-complete object:

                    var objHandle = new autocomplete();

  You do not pass any arguments to the constructor.

  The above code should appear inside your <head></head> tags within JavaScript tags. In any case,
  this code MUST appear in the physical page BEFORE you attempt to load the auto-complete object.


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  IMPLEMENTATION - INSTANTIATING MULTIPLE AUTO-COMPLETE OBJECTS

  This JavaScript library takes an OOP-ish approach to the auto-complete object creation
  and management. The benefit of this to you is that you can have multiple auto-complete
  objects on one page and have them operate independantly of one another.

  For each of the auto-complete objects, you can specify a completely separate set of 
  words/phrases  and access their methods individually.

  To have more than one auto-complete on the page, simply instantiate each new auto-complete
  object with a different handle name. For example, if I was creating a page where the user
  could fill in separate fields for their name, occupation and location  then I would
  instantiate the objects inside JavaScript tags inside the <head></head> tags of the page
  like this:


<script>
<!--
var names = new autocomplete();
var occupations = new autocomplete();
var locations = new autocomplete();
//-->
</script>


  I would now access methods individually for each auto-complete object simply by
  refering to the handle for the auto-complete object in question (names, occupations,
  locations are the object handles).


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  IMPLEMENTATION - DEFINING THE LIST OF WORDS TO TEST AGAINST

                 - ADDING AN ARRAY (LIST) OF WORDS/PHRASES

  The auto-complete process needs a list of words or phrases (multiple words with spaces)
  that it can test against. While you can add them one at a time (see next section) you
  will more likely want to add them all at once. This will be especially true if the
  web page implementing the auto-complete is being served up dynamically (Perl, PHP, etc).

  To pass the values all at one, you need to add all the words or phrases you want as
  part of the object to a JavaScript array. There are a few different methods of doing
  this but since this is not a JavaScript tutorial, I will show one quick sample:

        var myValues = new Array('Blue','Red','Green','Yellow','Beige','Fuschia','Tangerine');

  To add an array of words or phrases, pass the reference to an array as the argument
  to this method:

        objHandle.addArray(myValues);

  That's all there is to it. The words/phrases are now part of the auto-complete object
  and ready to be accessed!


  **NOTE: While it might appear like a good thing to do, you not pass a list to this
          method. You must ONLY pass it an array variable. What this means is,
          if you try and do the following, the library will fail to do anything useful:

        objHandle.addArray('Blue','Red','Green','Yellow','Beige','Fuschia','Tangerine');

          Again, doing the above WILL NOT WORK. You must pass an array variable
          like in the first example.



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  IMPLEMENTATION - DEFINING THE LIST OF WORDS TO TEST AGAINST

                 - ADDING SINGLE WORDS/PHRASES.


  The second method of adding words/phrases to the object is to do so one at a time.
  You can use this to add words based on a response to user activity or cause 
  other selected options to add words to the object.

  You can add a single word/phrase by passing that word/phrase a the argument to
  the following method:

        objHandle.addWord([word/phrase]);

  A couple examples of this would be:

        objHandle.addWord('Cyan');

        ~OR~ 

        objHandle.addWord("Mike Summers");

        ~OR~

        var theBoss = 'J. Johnna Jamieson';
        objHandle.addWord(theBoss);


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  **WARNING: REMEMBER THAT THE AUTO-COMPLETE OBJECT WILL OFFER WORD PROMPTING
             AGAINST IT'S LIST OF WORDS/PHRASES IN THE ORDER THAT THEY WERE
             ADDED TO THE OBJECT.

             LOOK AT THE FOLLOWING LIST AS AN EXAMPLE:

                      Bar
                      Barn
                      Barney
                      Barnaby

             IF A USER WAS TYPING AGAINST THE ABOVE LIST AND HAD TYPED THE FIRST FOUR
             LETTERS "Barn" THEN THEY WOULD FIND THEMSELVES BEING PROMPTED FOR "Barney"
             EVEN THOUGH ALPHABETICALLY, "Barnaby" WOULD COME FIRST. THIS IS BECAUSE OF
             THE ORDER THAT WORDS WERE ADDED TO THE OBJECT.
             
             Make sure your list is properly sorted before you add it.


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  IMPLEMENTATION - DEFINING THE LIST OF WORDS TO TEST AGAINST

                 - REMOVING A WORD/PHRASE FROM THE OBJECT

  If you want to dynamically remove a word from the list of words/phrases held in
  the auto-complete object, then call the following method:

        objHandle.removeWord([Word or phrase]);

        Example:

            objHandle.removeWord('Blue');

            ~OR~

            var somePhrase = 'Bee Bop A Loo La';
            objHandle.removeWord(somePhrase);


  **NOTE: The word match for removing words IS case sensitive. If that exact word
          or phrase appears more than once in the list, only one of it's instances
          will be removed with each call to this method.


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  IMPLEMENTATION - IGNORING CASE

  To facilitate use by the end user, you can set the auto-complete object to ignore the
  case of the characters they are typing. If you do this, the object will replace with
  the same case as it has in it's list of words or phrases but will match against any
  case the user types.

  To set the object to ignore the case of the characters the user is typing, call the
  following method with NO arguments:

        objHandle.ignoreCase();

  Just because I like things balanced, in case you are turning off case sensitivity
  dynamically, then I have provided a method to make the object case sensitive again:

        objHandle.caseSensitive();

  **NOTE: The object is case sensitive by default so if you want it case sensitive, you
          do not need to specify it.


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  IMPLEMENTATION - ACCESSING THE OBJECTS LIST OF WORDS

  While not something that would typically be used, you may find cause to access the
  list of words that are in the object. This is done simply by calling the following
  method with no arguments, returning a list:

        objHandle.list();

  An example of implementing this would be:

        var getNames = new Array();
        getNames = objHandle.list();

        ~OR~

        someExistingArray.push(objHandle.list());



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  IMPLEMENTATION - COUNTING WORDS IN THE OBJECT

  If you have cause to dynamically based count of the words/phrases held in the
  auto-complete object, this call the following method with no arguments:

        objHandle.count();

  An example of this would be:

        window.alert('There are '+objHandle.count()+' words that can be suggested.');

  **NOTE: This method returns a true count of the number of words in the object.
          It does not return the element position of the last word. It operates the
          same as the length property of a regular array.


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>


  IMPLEMENTATION - USING THE AUTO-COMPLETE OBJECT

  Now that you have instantiated the object and added list of words or phrases, you can
  implement the auto-complete on any text field.

  The event that triggers the auto-complete object is "onkeyup". Please note that unlike
  other offerings for this type of functionality, we do not use the "onkeypress" event
  or "onchange" event.

  The actual method call has two static arguments that are the same no matter how many
  implementations you have on a single page. This is because these are special keywords
  to JavaScript that mean something different for each instance you will use them.

  Here is an example of the correct way to implement the auto-complete on a text field.
  Take note of the "onkeyup" event near the end of the tag:


  <input type="text" name="someName" id="someID" value="" size="20"  onkeyup="return objHandle.complete(this, event);">

  Simply add this following event to any text box or textarea box:

        onkeyup="return objHandle.complete(this, event);"


  For example, further up in this file we discussed instantiating multiple objects. In
  that example we instantiated the following objects:  names, occupations, locations

  Here is the example of how we would use those objects in text fields on the same page.
  Please take not of the changed objHandle names in these examples:


  <input type="text" name="employeeNames" id="employeeNames" value="" size="20"  onkeyup="return names.complete(this, event);">

  <input type="text" name="employeeOccupations" id="employeeOccupations" value="" size="20"  onkeyup="return occupations.complete(this, event);">

  <input type="text" name="employeeLocations" id="employeeLocations" value="" size="20"  onkeyup="return locations.complete(this, event);">



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>

  FULL PROPERTY & METHOD LIST


  [PROPERTIES]

            *** This library has NO properties for you to set or access ***

  [METHODS]

  METHOD                     ARGUMENTS               EXAMPLE


  objHandle.addArray         An array reference      objHandle.addArray(myArrName);


  objHandle.addWord          A string                objHandle.addWord('something')
                                                     ~OR~
                                                     var name = 'My Name'; objHandle.addWord(name);


  objHandle.removeWord       A string                objHandle.removeWord('Some Word');
                                                     ~OR~
                                                     var removename = 'My Name'; objHandle.removeWord(removename);


  objHandle.complete         (this, event)           objHandle.complete(this, event);
                                                     These are static arguments, they NEVER change no matter
                                                     how many objects you instantiate on the page.


  objHandle.setRange         ***YOU DO NOT ACCESS THIS METHOD, EVER***


  objHandle.ignoreCase       None                    objHandle.ignoreCase();


  objHandle.caseSensitive    None                    objHandle.caseSensitive();


  objHandle.count            None                    var wordCount = objHandle.count();


  objHandle.list             None                    var wordsInList = new Array();
                                                     wordsInList = objHandle.list();



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>



  SAMPLES OF INSTANTION AND PROPERTY ASSIGNMENT

  Extract all the files from this archive and store them in the same folder on your computer.

  Using your browser open the file "example_autocomplete.html" in your browser. 

  After seeing how they work, you can then view the source code to examine the
  object instantiation, property settings and method useage.


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>

  DEBUGGING

  This object library has been tested extensively in Opera 9.0, IE6.0, Firefox 1.5 and
  Netscape 8.0. If you call your page and encounter problems with the auto-complete
  operation, then the following suggestions will help you find the
  problem.

  >> Check all methods that are called. All methods MUST end in parenthesis whether or not
     arguments are passed to it. For example:

     objHandle.ignoreCase;   //Not so good
     objHandle.ignoreCase();   //MUCH BETTER!


  >> Arguments improperly assigned for their native type. What this means is that if you
     are passing an argument as an integer, you can just type the value. If you are passing
     an argument that is a string, you must enclose that in quotes. If you are passing an
     argument as a array (reference), you must NOT enclose it in quotes. Here are some examples:

     objHandle.addArray('myArrName'); //This is VERY bad. Results will not be what you expect.
     objHandle.addArray(myArrName);   //Martha says, "This is a very good thing"

     objHandle.addWord('Blue');       //Martha says, "This is a very good thing"
     objHandle.addWord(Blue);         //This is VERY bad. JavaScript will probably crash in the page.


  >> Typos are easy. If you have assigned a property or argument correctly according to it's native type
     then your next check should be that you have typed all property and method names correctly. It's 
     easy to overlook. What I recommend (and this works) is to start at the bottom of the list of methods
     you have typed and work you way upwards, reading each method and handle name backwards (from right
     to left). This will help make typo's jump out at you.

  >> Wrong object handle used. When you have more than one auto-complete object on a page. It is quite easy to
     use the wrong object handle when setting a property or calling a method. Check your object handle name
     for the correct name AND for typo's while you are checkign your speling on the properties and methods.

  >> Browser Version. If you are using Internet Explorer 5.0, that is probably the cause of the problems.
     Update your version of IE and try again.



<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>

  SUPPORT

  If you have run some debugging, are not using Internet Explorer 5.0 and have a headache
  from beating your head on the wall, you can contact me for assistance. I will require
  that you send me the page you are using the auto-complete object on as well as any other
  CSS or JS files needed for the page (unless you link to them with a full URL in the
  page).

  Once I have rectified the problem, I will notify you. Payment of US$40 per hour (one hour
  minimum ) is required before the solution will be released. In almost all cases, the
  solution will be within that hour.

  If I am not able to find a solution for what you are encountering then you will be
  notified and YOU WILL NOT OWE ME ANYTHING. I do not accept any payment unless I can
  provide a working solution. If I estimate that my time will exceed one hour, then you
  will be notified BEFORE I commence any work.

  I do not offer support for this library as it is free, easy to implement and well documented.
  Any mistakes that occur which prevent it from operating are most likely yours. If you
  are using it for a mission critical application and MUST get it running but can't
  figure it out, I will offer custom integration per the terms above.

  PLEASE CONTACT ME AT:      jmelanson1965@gmail


<*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*><*>

