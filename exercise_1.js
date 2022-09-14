const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corrupti possimus veniam nulla amet, eveniet distinctio aliquam, suscipit dignissimos, quas consequatur iste nemo voluptatum? Facilis eius quos at magni. Optio?';

//1) var 1

function matchText(text, expression) {
    return text.toLowerCase().indexOf(expression.toLowerCase());
}

console.log(matchText(text, 'lorem'));

//2) var 2

function findFirstWord(text, expression) {
    const textArr = text.toLowerCase().split(' ');

    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i] === expression.toLowerCase()) {
            return console.log(`Word '${expression}' at position ${i+1}`);
        }
    }
}

findFirstWord(text, 'lorem');