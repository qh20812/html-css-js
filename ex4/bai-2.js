// Viết một function tên là includes (tự cài đặt, không dùng method .includes() của
// array).
// Nhận vào 2 tham số: một array và một search element.
// Trả về true nếu tìm thấy search element trong array, ngược lại trả về false.
function includes(array, searchElement) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === searchElement) {
            return true;
        }
    }
    return false;
}
console.log(includes([1, 2, 7, 4, 5], 3));