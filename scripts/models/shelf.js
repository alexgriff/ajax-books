class Shelf {
  constructor( length ) {
    this.length = length || 100;
    this.bookTotal = 0;
    this.books = [];
  }

  remainingSpace() {
    return this.length - this.bookTotal
  }

  addBook( book ) {
    // TO DO: this still needs to check if there isn't enough room
    this.bookTotal += book.thickness
    this.books.push( book );
  }


}
