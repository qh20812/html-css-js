function calculateGrade(marks) {
    if (!Array.isArray(marks) || marks.length === 0) return "No marks";
    let total = 0;
    for (let mark of marks) {
        total += mark;
    }
    let average = total / marks.length;
    if (average < 60) return "F";
    if (average < 70) return "D";
    if (average < 80) return "C";
    if (average < 90) return "B";
    return "A";
}