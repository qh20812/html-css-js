// Viết function getMax nhận vào một array. Trả về giá trị lớn nhất trong array. Nếu array
// rỗng thì trả về undefined. Thực hiện theo 2 cách:
// ● Dùng for loop
// ● Dùng reduce

// Cách 1: Dùng for loop
function getMaxForLoop(array) {
    if (array.length === 0) return undefined;
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}


// Cách 2: Dùng reduce
function getMaxReduce(array) {
    if (array.length === 0) return undefined;
    return array.reduce((max, item) => item > max ? item : max);
}
