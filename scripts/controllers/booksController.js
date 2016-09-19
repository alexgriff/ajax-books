class BooksController {
  constructor() {
    this.attachListeners();
  }

  attachListeners() {
    var booksCntrl = this;
    $( 'input:submit' ).click(function( e ) {
      e.preventDefault();
        // fn to make request, use a GoogleBooksAdapter class
        // something like:
        // var adapter = new GoogleBooksAdapter(input);
        // adapter.buildBook();
      })


    });

    $( 'body' ).on( "click", ".book", function() {
      // fn to remove book from shelf
    })
  }

  getInput() {
    return {
      title: $('#book_title').val(),
      author: $('#book_author').val()
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
