function sum(...items) {
    if (items.length === 1 && Array.isArray(items[0])) {
        return items[0].reduce((total, num) => total + num, 0);
    }
    return items.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Kết quả: 10
console.log(sum([1, 2, 3, 4])); // Kết quả: 10