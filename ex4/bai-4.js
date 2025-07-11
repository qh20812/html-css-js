// Viết function move để di chuyển một phần tử trong array sang một vị trí khác (theo
// offset).
// Tham số:
// ● array (array gốc)
// ● index (vị trí phần tử muốn di chuyển)
// ● offset (số bước muốn di chuyển, có thể dương hoặc âm)
// Nếu offset không hợp lệ (vượt ngoài phạm vi array), báo lỗi Invalid offset bằng
// console.error và return luôn (không trả về array).
// Hàm không làm thay đổi array gốc, trả về array mới với phần tử đã di chuyển.
function move(array, index, offset){
    if (index < 0 || index >= array.length) {
        console.error("Invalid index");
        return;
    }
    const newPosition = index + offset;
    if (newPosition < 0 || newPosition >= array.length) {
        console.error("Invalid offset");
        return;
    }
    const result = array.slice();
    const element = result.splice(index, 1)[0];
    result.splice(newPosition, 0, element);
    return result;
}
console.log(move([1,2,3,4,5], 1, 2));