function createStudent(name, gender, age) {
    const student = {
        name: name,
        gender: gender,
        age: age,
        marks: [],
        subject: '',

        setSubject: function(subjectName) {
            this.subject = subjectName;
        },

        addMarks: function(...marksToAdd) {
            this.marks.push(...marksToAdd);
        },

        getAverage: function() {
            if (!this.marks || this.marks.length === 0) {
                return 0;
            }
            const sum = this.marks.reduce((total, mark) => total + mark, 0);
            return sum / this.marks.length;
        },

        exclude: function(reason) {
            delete this.subject;
            delete this.marks;
            this.excluded = reason;
        }
    };

    return student;
}

let student1 = createStudent("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);

let student2 = createStudent("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2);