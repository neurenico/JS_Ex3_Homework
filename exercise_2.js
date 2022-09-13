function createArray(value) {
    const arr = [];

    for (let i = 0; i < value; i++) {
        arr.push(i + 1);
    }

    return arr;
}
function sortArray() {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 1) {

            if (arr[i] % 13 === 0) {
                newArr.push((arr[i] - 5) / 2);
            } else {
                newArr.push(arr[i] / 2);
            }
        } else {

            if (arr[i] % 13 === 0) {
                newArr.push((arr[i] - 5) * 2);
            } else {
                newArr.push(arr[i] * 2);
            }
        }
    }

    return newArr;
}

const arr = createArray(20);
const newArr = sortArray();

console.log(`New array is next\n ------------------\n`, newArr);


