function createArray(value) {
    const arr = [];

    for (let i = 0; i < value; i++) {
        arr.push(i + 1);
    }

    return arr;
}

function check13(array, i) {
    if (array[i] % 13 === 0) {
        array[i] -= 5;
    }
}
function modifyingArray(array) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            check13(array, i);
            array[i] = array[i] / 2;
        } else {
            check13(array, i);
            array[i] = array[i] * 2;
        }
        newArr.push(array[i]);
    }

    return newArr;
}

const arr = createArray(20);
const newArr = modifyingArray(arr);

console.log(`New array is next\n ------------------\n`, newArr);


