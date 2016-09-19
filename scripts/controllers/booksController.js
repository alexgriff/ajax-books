class BooksController {
  constructor() {
    this.attachListeners();
  }

  attachListeners() {

    // listener on submit button
    $( 'input:submit' ).click(function( e ) {
      e.preventDefault();
        // fn to make request, use a GoogleBooksAdapter class
        // something like:
        // var adapter = new GoogleBooksAdapter( input );
        // adapter.buildBook();

        // reset input fields to empty strings
        $('#bookTitle').val("");
        $('#bookAuthor').val("");
      })


      // listener on book class
      $( 'body' ).on( "click", ".book", function() {
        // fn to remove book from shelf
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
