let student = {
    name: "Alice",
    age: 20,
    marks: [],
    addMarks: function(newMark) {
        this.marks.push(newMark);
    },
    removeStudent: function() {
        delete this.name;
        delete this.age;
        delete this.marks;
    }
};

// Теперь проведем тесты
describe("Student", function() {
    it("should have name, age, and marks properties", function() {
        expect(student.name).toBeDefined();
        expect(student.age).toBeDefined();
        expect(student.marks).toEqual([]);
    });

    it("should add marks correctly", function() {
        student.addMarks(85);
        expect(student.marks).toEqual([85]);
    });

    it("should remove student correctly", function() {
        student.removeStudent();
        expect(student.name).toBeUndefined();
        expect(student.age).toBeUndefined();
        expect(student.marks).toBeUndefined();
    });
});