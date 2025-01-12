const countCharacters = (str) => {
  return String(str).length;
}

const countVowels = (str) => {
 let vowels = ['a', 'e','i', 'o', 'u'];
 return String(str).toLowerCase().split('').filter(char => vowels.includes(char)).length;
}

const checkExistenceOfStr = (str, checkStr) => {
  return str.includes(checkStr);
}

const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
}

const titleCaseConversion = (str) => {
  return str.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
}

const findLongestWord = (str) => {
  str = str.split(' ');
  return str.sort((a, b) => b.length - a.length)[0];
}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}