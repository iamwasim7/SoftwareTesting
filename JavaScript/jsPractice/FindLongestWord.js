//Exercise 6 – Find the Longest Word
/*Requirements:
1. Create a function named findLongestWord.
2. Accept the words array as a parameter.
3. Create a variable longestWord and initialize it with the first word.
4. Use a for loop to check the remaining words.
5. Compare the length of each word with longestWord.
6. If the current word is longer, update longestWord.
7. Return the longest word. */

let words = ["JavaScript", "Python", "Playwright", "HTML", "Automation"];

const findLongestWord = (words) =>{
    let longestWord = "JavaScript";
    for (let i = 1; i < words.length; i++) {
        if(longestWord.length < words[i].length){
            longestWord = words[i];
        }   
    }
    return longestWord; 
}

console.log(findLongestWord(words));