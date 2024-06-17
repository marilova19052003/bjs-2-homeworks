class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state *= 1.5;
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, author) {
      super(name, releaseDate, pagesCount);
      this.type = "book";
      this.author = author;
    }
  }
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      for (let book of this.books) {
        if (book[type] === value) {
          return book;
        }
      }
      return null;
    }
  }
  
  const magazine1 = new Magazine("Magazine1", "2021-01-01", 100);
  const book1 = new Book("Book1", "2020-01-01", 200, "Author1");
  
  const library = new Library("My Library");
  library.addBook(magazine1);
  library.addBook(book1);
  
  const foundBook = library.findBookBy("author", "Author1");
  console.log(foundBook);