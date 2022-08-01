// https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc/train/javascript

function isAValidMessage(message) {
    if (message == "") {
        return true;
    }

    const isNumber = (character) => {
        return Boolean(Number(character));
    };

    const messageArr = [];

    for (let j = 0; j < message.length; j++) {
        messageArr.push(message[j]);
    }
    const nums = [];

    // TODO: проверить на большое число

    for (let i = 0; i < message.length; i++) {
        accum = 0;
        x = true;
        while (x) {
            if (isNumber(message[i])) {
                ++accum;
                i++;
            } else {
                x = false;
            }
        }

        const num = message.slice(i - accum, i);

        if (isNumber(num)) {
            nums.push(Number(num));
            messageArr[i - 1] = " ";
        }
    }

    const words = messageArr.join("").split(" ");

    for (let index = 0; index < words.length; index++) {
        if (words[index] == "") {
            words.splice(index, 1);
        }
    }

    if (nums[nums.length - 1] == 0) {
        nums.splice(nums.length - 1, 1);
    }

    for (let index = 0; index < words.length; index++) {
        for (let i = 0; i < words[index].length; i++) {
            const tmp = words[index].split("");
            if (isNumber(words[index][i])) {
                tmp.splice(i, 1);
                words[index] = tmp.join("");
            }
        }
    }

    k = 0;

    for (let i = 0; i < words.length; i++) {
        if (words.length === nums.length) {
            if (words[i].length == nums[i]) {
                k++;
            }
        }
    }

    let currentString = "";

    for (let i = 0; i < words.length; i++) {
        currentString += String(nums[i]) + words[i];
    }

    if (k == words.length) {
        if (currentString.trim() == message.trim()) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(isAValidMessage("4code13hellocodewars"), true);
console.log(isAValidMessage("3hey5hello2hi"), true);
console.log(isAValidMessage("code4hello5"), false);
