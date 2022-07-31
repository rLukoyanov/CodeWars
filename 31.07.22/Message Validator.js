// https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc/train/javascript

function isAValidMessage(message) {
    const isNumber = (character) => {
        return Boolean(Number(character));
    };
]
    const messageArr = [];

    for (let j = 0; j < message.length; j++) {
        messageArr.push(message[j]);
    }
    const nums = [];

    // ? проверить на большое число

    for (let i = 0; i < message.length; i++) {
        if (isNumber(message[i]) && isNumber(message[i + 1])) {
            nums.push(Number(messageArr[i] + messageArr[i + 1]));
            messageArr[i] = " ";
            messageArr[i + 1] = " ";
        } else {
            if (isNumber(message[i])) {
                nums.push(Number(messageArr[i]));
                messageArr[i] = " ";
            }
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
