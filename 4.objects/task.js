function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.subject = '';

    
    Student.prototype.setSubject = function(subjectName) {
        this.subject = subjectName;
    };

    
    Student.prototype.getAverage = function() {
        return 0; 
    };

    Student.prototype.exclude = function(reason) {
        this.subject = '';
        this.marks = []; 
        this.excluded = reason;
    };

   
    
}

let student1 = new Student("Василиса", "женский", 19);
student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
console.log(student1);

let student2 = new Student("Артём", "мужской", 25);
student2.setSubject("Geometry");
student2.exclude('плохая учёба');
console.log(student2);