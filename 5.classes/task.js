class PrintPublication {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  }
  
  class Book extends PrintPublication {
    constructor(title, author, year, genre) {
      super(title, author, year);
      this.genre = genre;
    }
  }
  
  class Magazine extends PrintPublication {
    constructor(title, author, year, category) {
      super(title, author, year);
      this.category = category;
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
      this.magazines = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    addMagazine(magazine) {
      this.magazines.push(magazine);
    }
  }
  
  // Пример использования:
  const library = new Library();
  const book1 = new Book("Преступление и наказание", "Федор Достоевский", 1866, "роман");
  const magazine1 = new Magazine("National Geographic", "Various", 1888, "наука");
  
  library.addBook(book1);
  library.addMagazine(magazine1);