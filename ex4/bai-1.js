// Viết một function tên là arrayFromRange, nhận vào 2 tham số min và max.
// Function này trả về một array chứa các số từ min đến max.
// Nếu max nhỏ hơn min thì trả về một array rỗng.
function arrayFromRange(min, max){
    if(max<min){
        return [];
    }
    let result = [];
    for(let i = min; i <= max; i++){
        result.push(i);
    }
    return result;
}
console.log(arrayFromRange(7, 10));