// https://www.codewars.com/kata/56d6b7e43e8186c228000637/train/javascript

function colourAssociation(array) {
    const answ = [];

    array.forEach((element) => {
        const item = {
            [element[0]]: element[1],
        };
        answ.push(item);
    });

    return answ;
}

console.log(
    colourAssociation([
        ["white", "goodness"],
        ["blue", "tranquility"],
    ]),
    [{ white: "goodness" }, { blue: "tranquility" }]
);
