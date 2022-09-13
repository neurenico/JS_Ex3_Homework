const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corrupti possimus veniam nulla amet, eveniet distinctio aliquam, suscipit dignissimos, quas consequatur iste nemo voluptatum? Facilis eius quos at magni. Optio?';

function matchText(text, expression) {
    return text.toLowerCase().indexOf(expression.toLowerCase());
}

console.log(matchText(text, 'lorem'));