// Viết function tên là except.
// Nhận vào 2 tham số:
// ● Một array gốc.
// ● Một array chứa các giá trị muốn loại bỏ khỏi array gốc.
// Function trả về một array mới gồm các phần tử không nằm trong array loại trừ.
function except(array, excluded){
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (!excluded.includes(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(except([1, 2, 3, 4, 5], [2, 3])); // [1, 4, 5]