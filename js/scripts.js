function userPrompt(){
	var sentence=prompt("Enter a sentence: ");
  return sentence;
};

function capFirstLast(string1){
	var strLen= string1.length;
	firstLetter = string1.charAt(0);
  lastLetter = string1.charAt(string1.length - 1);
  firstLetter = firstLetter.toUpperCase();
  lastLetter = lastLetter.toUpperCase();
  //newString = string1.substr(1, string1.length-2);
  return firstLetter + newString + lastLetter;
}

function revFirstLast(string1){
	var strLen= string1.length;
	firstLetter = string1.charAt(string1.length - 1);
  lastLetter = string1.charAt(0);
  newString = string1.substr(1, string1.length-2);
  return firstLetter + newString + lastLetter;
}

function countAdd(string1) {
	var strLen = string1.length;
  var divIndex = Math.round(strLen /2);
  var newLetter = string1.charAt(divIndex);
  return newLetter + string1;
}

function strReverse(string1){
	var newString = "";
  for (var i = string1.length - 1; i >= 0; i--) {
  	newString += string1[i];
	}
  return newString;
}

alert(strReverse(userPrompt()));
