// Tạo object circle với property radius (đọc/ghi) và area
// (chỉ đọc)
// ● Tạo object circle (dùng object literal).
// ● Có property radius (đọc/ghi được).
// ● Có property area (chỉ đọc, tự động tính theo công thức diện tích hình tròn).
// ● Không được phép gán giá trị cho area từ ngoài.

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};