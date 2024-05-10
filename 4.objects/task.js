function Student(name) {
    this.name = name;
    this.subject = 'Math';
    this.excluded = false;
}

Student.prototype.exclude = function(reason) {
    if (!this.excluded) {
        delete this.subject;
        delete this.marks;
        this.excluded = reason;
    }
};

Student.prototype.getAverage = function(marks) {
    if (!marks || marks.length === 0 || this.excluded) {
        return 0;
    }
    const sum = marks.reduce((total, mark) => total + mark, 0);
    return sum / marks.length;
};

// Пример использования
const student1 = new Student('Alice');
const student2 = new Student('Bob');

const aliceMarks = [4, 5, 3];
const bobMarks = [5, 5, 4];

console.log(student1.getAverage(aliceMarks)); // Выведет средний балл для Алисы
student1.exclude('Poor attendance');
console.log(student1.getAverage([5, 4])); // Выведет 0, так как студент 