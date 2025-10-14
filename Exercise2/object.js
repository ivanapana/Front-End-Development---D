let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// 1. Add "Go" to the end of languages array
programming.languages.push("Go");
console.log(programming.languages);
// ["JavaScript", "Python", "Ruby", "Go"]

// 2. Change difficulty to 7 (using bracket notation)
programming["difficulty"] = 7;
console.log(programming.difficulty); // 7

// 3. Remove jokes key
delete programming.jokes;
console.log(programming);

// 4. Add isFun = true (using dot notation)
programming.isFun = true;
console.log(programming.isFun); // true

// 5. Using map() to update languages
let mappedLanguages = programming.languages.map((lang, index) => {
  return `${index} - ${lang}`;
});
console.log(mappedLanguages);
// ["0 - JavaScript", "1 - Python", "2 - Ruby", "3 - Go"]
