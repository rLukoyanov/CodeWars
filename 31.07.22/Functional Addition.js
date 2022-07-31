// https://www.codewars.com/kata/538835ae443aae6e03000547/train/javascript

function add(x) {
    return (y) => {
        return x + y;
    };
}

console.log(add(1)(3), 4);
