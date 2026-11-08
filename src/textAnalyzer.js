const fs = require("fs")
function countWords(text) 
 {return text.split(" ").length;}

 function findLongestWord(text){ 
 let words = text.split(" ")
 let longestWord = ""
  for(let word of words){ if( word.length > longestWord.length){

 { longestWord = word }} }return longestWord}
 
function countlines(text){
    return text.split("\n").length
}


console.log(countWords("Hello World"))
console.log(findLongestWord("The elephant runs"))
console.log(countlines("line one\nline two\nline three"))
const quotes = fs.readFileSync("./data/quotes.txt","utf8")
console.log(countlines(quotes))
const sampletext = fs.readFileSync("./data/sample-text.txt","utf8")
console.log(countWords(sampletext))
console.log(countlines(sampletext))
console.log(findLongestWord(sampletext))
module.exports ={countWords,findLongestWord,countlines}