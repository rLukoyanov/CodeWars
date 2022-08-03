// https://www.codewars.com/kata/51b66044bce5799a7f000003/train/javascript

const toRoman = (num) => {
    const numsLength = String(num).length;
    if (numsLength < 2) {
        if (num <= 3) {
            let answ = "";
            for (let i = 0; i < num; i++) {
                answ += "I";
            }
            return answ;
        }

        if (num == 4) {
            return "IV";
        }

        if (num > 4 && num < 9) {
            let answ = "V";
            for (let i = 0; i < num - 5; i++) {
                answ += "I";
            }
            return answ;
        }
    }
    if (numsLength > 1) {
    }
};

const fromRoman = (num) => {};

const RomanNumerals = {
    toRoman,
    fromRoman,
};

console.log(RomanNumerals.toRoman(3)); // work
console.log(RomanNumerals.toRoman(8)); // work
console.log(RomanNumerals.toRoman(9));