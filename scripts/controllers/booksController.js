class BooksController {
  constructor() {
    this.attachListeners();
  }

  attachListeners() {
    var booksCntrl = this;
    $( 'input:submit' ).click(function( e ) {
      e.preventDefault();
      var input = booksCntrl.getInput();

      var promise = new Promise( function( resolve, reject ) {
        var adapter = new GoogleBooksAdapter( input );
        if ( adapter ) {
          resolve( adapter.buildBook() )
        } else {
          reject( )
        }
      })

      promise.then( function( book ) {
        app.shelvesController.shelf.addBook( book );
        app.shelvesController.render();
      })
    });

    $( 'body' ).on( "click", ".book", function() {
      alert('bye')
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
