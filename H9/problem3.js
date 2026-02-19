// WE KNOW BEST PRACTICESSSSS
const SortBy = Object.freeze({
  YEAR: "year",
  TITLE: "title",
});

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(id) {
    this.books = this.books.filter((b) => b.id !== id);
  }

  listBooks(sortBy = null) {
    const list = [...this.books];
    if (sortBy === SortBy.YEAR) list.sort((a, b) => a.year - b.year);
    if (sortBy === SortBy.TITLE)
      list.sort((a, b) => a.title.localeCompare(b.title));
    return list;
  }
}

const lib = new Library();
lib.addBook({ id: 1, title: "Dvesti Miliardel Aligarxav", year: 2008 });
lib.addBook({ id: 2, title: "The Pragmatic Programmer", year: 1999 });
lib.addBook({ id: 3, title: "You Don't Know JS", year: 2014 });

console.log(lib.listBooks(SortBy.YEAR));
console.log(lib.listBooks(SortBy.TITLE));
