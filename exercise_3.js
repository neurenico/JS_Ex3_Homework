const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corrupti possimus veniam nulla amet, eveniet distinctio aliquam, suscipit dignissimos, quas lorem ipsum consequatur iste nemo voluptatum? Facilis eius quos at magni. Optio?';

//1) var 1

function matchText(text, expression) {
    return text.toLowerCase().lastIndexOf(expression.toLowerCase());
}

console.log(matchText(text, 'Lorem ipsum'));

//2) var 2

function findFirstWord(text, expression) {
    const textArr = text.toLowerCase().split(' ');
    const expItems = expression.toLowerCase().split(' ');

    for (let i = textArr.length; i >= 0; i--) {
        if (textArr[i - 1] === expItems[0] && textArr[i] === expItems[1]) {
            return console.log(`Expression '${expression}' at position ${i}`);
        }
    }
}

findFirstWord(text, 'Lorem ipsum');