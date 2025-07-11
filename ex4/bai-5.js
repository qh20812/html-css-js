// Viết function countOccurrences nhận vào:
// ● array
// ● searchElement
// Trả về số lần xuất hiện của searchElement trong array.

function countOccurrences(array, searchElement) {
    return array.reduce((count, item) => item === searchElement ? count + 1 : count, 0);
}
console.log(countOccurrences([1, 2, 3, 1, 4, 1], 1));