// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
function highAndLow(numbers) {
    const StringArr = numbers.split(" ");
    const NumsArr = StringArr.map(Number);
    Array.prototype.max = function () {
        return Math.max.apply(null, this);
    };

    Array.prototype.min = function () {
        return Math.min.apply(null, this);
    };

    return `${NumsArr.max()} ${NumsArr.min()}`;
}

console.log(highAndLow("1 2 3"));
