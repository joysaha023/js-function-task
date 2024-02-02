// let sentence = "This is the Using of For Loop";
// let reverse = "";

// for (var i = sentence.length - 1; i >= 0; i--){
//     console.log(sentence[i]);
//     reverse += sentence[i];
// }
// console.log(reverse);

var input = "converT stRing To tItle case";

// var words = input.split(" ");
// console.log(words);

// for(var i = 0; i < words.length; i++){
//   words[i] = words[i][0].toUpperCase()+words[i].slice(1).toLowerCase();
// }
// var converted = words.join(" ");
// console.log(converted);

var words = input.split(" ");
// console.log(words);

for(var i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
}

var converted = words.join(" ");

console.log(converted);