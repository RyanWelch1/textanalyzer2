// your code here!


//total word count of submitted text when submit button is clicked


$(".text-input-form").on("submit", function(event) {
	event.preventDefault();
	var input = $("textarea#user-text").val();
  	console.log(input);
  	var newInput = tokenizeText(removeReturns(input));
  	console.log(newInput);
  	var count = wordCount(newInput);
  	$("#WC1").text("Word Count: " + count);
  	console.log(count);
  	$(".hidden").removeClass();
  	var uniqueWordCounts = uniqueWords(newInput);
  	$("#WC2").text("Unique Words:  " + uniqueWordCounts);
    var averageLength = averageWordLength(newInput);
    console.log(averageLength);
    $("#WC3").text("Average Word Length: " + averageLength);
   
 });

function tokenizeText(text) {
    return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function removeReturns(text) {
	return text.replace(/\r?\n|\r/g, "");

}

function wordCount(words) {
	return words.length;

}

function uniqueWords(words) {
  var distinctWords = [];
  for (var i = 0; i < words.length; i++) {
  	if(distinctWords.indexOf(words[i]) === -1) {
  		console.log(words[i], distinctWords.indexOf(words[i])); 		
  		distinctWords.push(words[i]);
  	}
  }
  
  return distinctWords.length;
}

function averageWordLength(words) {
    var totalCharacters = 0;
    
   
    for (var i = 0; i < words.length; i++) {
        console.log(words[i].length)
        totalCharacters = totalCharacters + words[i].length
    }

    var averageLengthOfWords = totalCharacters / words.length;
    console.log(words)

    return averageLengthOfWords;

    console.log(words);
    console.log(typeof totalCharacters, typeof words.length);
    console.log("result: " + totalCharacters / words.length);
}

