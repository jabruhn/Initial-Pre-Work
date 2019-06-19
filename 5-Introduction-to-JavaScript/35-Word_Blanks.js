//wod blanks.

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
  result+= "My "+myAdjective+" "+myNoun+" "+myVerb+" very "+myAdverb+".";
  var sentence = "It was really" + "big" +",and we" + "ran" + "quickly.";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
