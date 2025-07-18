// Viết hàm countOccurrences(array, searchElement) đếm số lần xuất hiện của
// searchElement trong array.
// ● Nếu đối số đầu tiên không phải mảng, phải throw exception.
// ● Khi sử dụng hàm, dùng try-catch để bắt và in lỗi.

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array)) {
        throw new Error("Đối số đầu tiên phải là mảng");
    }
    return array.reduce((count, element) => {
        return element === searchElement ? count + 1 : count;
    }, 0);
}
