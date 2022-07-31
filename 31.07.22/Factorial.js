// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript
function factorial(n) {
    let answ = 1;

    for (let i = 1; i <= n; i++) {
        answ *= i;
    }

    return answ;
}

console.log(factorial(4), 24);
