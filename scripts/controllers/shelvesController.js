class ShelvesController {
  constructor() {
    this.shelf = new Shelf;
    this.init();
  }

  init() {
    this.render( this.shelf );
    $( '.shelf' ).hide();
    $( '.shelfContents' ).hide();
  }

  render() {
    // clear out what's there
    $( '.shelfInfo' ).empty();
    $( '.shelf' ).empty();
    $( '.shelfContents ul' ).empty();

    // update space info
    $( '.shelfInfo' )
      .append(
        '<p>Your book shelf has <strong>'+ this.shelf.remainingSpace() +'</strong> millimeters of free space</p>'
      )

    // iterate over shelf's books and display each
    this.displayBookInfo( this.shelf.books )
  }

  displayBookInfo( books ) {
    books.forEach(
      function( book ) {
        $( '.shelfContents ul')
          .append(
            '<li>' + book.title + " - " + book.pageCount + ' pages</li>'
          );
        app.booksController.render( book )
      }
    )
  }
}
