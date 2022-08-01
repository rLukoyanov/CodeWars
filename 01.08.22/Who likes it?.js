// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
    const namesCounter = names.length;

    if (namesCounter > 0) {
        switch (namesCounter) {
            case 1:
                return `${names[0]} likes this`;
            case 2:
                return `${names[0]} and ${names[1]} like this`;
            case 3:
                return `${names[0]}, ${names[1]} and ${names[2]} like this`;
            default:
                return `${names[0]}, ${names[1]} and ${namesCounter - 2} others like this`;
        }
    } else {
        return "no one likes this";
    }
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
