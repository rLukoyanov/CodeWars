// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
  const arr = [];
  const Vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }
  let answ = 0;
  Vowels.forEach((Vowel) => {
    const vowelCount = arr.reduce((accum, currentVowel) => {
      if (currentVowel == Vowel) {
        return ++accum;
      }

      return accum;
    }, 0);
    
    answ += vowelCount;
  });

  return answ;
}

console.log(getCount("abracadabra"));
