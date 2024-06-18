class Book {
    constructor(author, name, releaseYear, pages) {
        this.author = author;
        this.name = name;
        this.releaseYear = releaseYear;
        this.pages = pages;
    }
}

class Magazine extends Book {
    constructor(name, releaseYear, pages) {
        super("Unknown", name, releaseYear, pages);
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseYear, pages) {
        super(author, name, releaseYear, pages);
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseYear, pages) {
        super(author, name, releaseYear, pages);
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseYear, pages) {
        super(author, name, releaseYear, pages);
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    findBookBy(property, value) {
        return this.books.find(book => book[property] === value) || null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            const book = this.books[index];
            this.books.splice(index, 1);
            return book;
        }
        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) return;

        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject]) return 0;

        const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
        return sum / this.marks[subject].length;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);

        if (subjects.length === 0) return 0;

        const totalSum = subjects.reduce((total, subject) => total + this.getAverageBySubject(subject), 0);
        return totalSum / subjects.length;
    }
}

// Тестовый сценарий
const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); // null
console.log(library.findBookBy("releaseYear", 1924).name); // "Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); // Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); // Количество книг после выдачи: 3

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика: 4.5
console.log(student.getAverageBySubject("биология")); // Вернет 0, так как по такому предмету нет никаких оценок
console.log(student.getAverage()); // Средний балл по всем предметам: 4.75