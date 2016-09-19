class BooksController {
  constructor() {
    this.attachListeners();
  }

  attachListeners() {
    $( 'input:submit' ).click(function( e ) {
      e.preventDefault();
        // TO DO: fn to make request, use a GoogleBooksAdapter class
        // something like:
        // var adapter = new GoogleBooksAdapter( input );
        // adapter.buildBook();

        // reset input fields to empty strings
        $('#bookTitle').val("");
        $('#bookAuthor').val("");
      })

    }

  getInput() {
    return {
      title: $('#bookTitle').val(),
      author: $('#bookAuthor').val()
    }
  }

  render( book ) {
    $('.shelf').show();
    $('.shelfContents').show();
    $('.shelf')
      .prepend(
        '<div class="book" style="display: inline; padding: .15em;"><img style="margin: 6px 2px 0 2px;" src='+ book.img +'></div>'
      );
  }

}
