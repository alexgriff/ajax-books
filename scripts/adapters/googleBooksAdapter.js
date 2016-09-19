class GoogleBooksAdapter {
  constructor( input ) {
    this.title = input.title;
    this.author = input.author;
    this.key = APIKEY
  }

  buildBook() {
    var adapter = this;
    // query the api with title and author to get the volume id
    return $.ajax( {
      method: "GET",
      url: "https://www.googleapis.com/books/v1/volumes?q=" + adapter.title +"+inauthor:" + adapter.author
    }).then( function( response ) {
      if ( response.items ) {
        // query the api with the volume id to get all the info
        var volumeId = response.items[0].id;
        return  $.ajax({
          method: "GET",
          url: "https://www.googleapis.com/books/v1/volumes/"+ volumeId +"?key="+ adapter.key
        }).then( function( response ) {

          var bookInfo;
          var title;
          var pageCount;
          var img;
          var thickness;

          bookInfo = response.volumeInfo;
          title = bookInfo.title;
          pageCount = bookInfo .pageCount;
          img = bookInfo.imageLinks.thumbnail;
          if (bookInfo.dimensions && bookInfo.dimensions.thickness){
            // will be in the format of "2.54 cm", so strip off last 3 chars
            var thicknessString = bookInfo.dimensions.thickness;
            // convert from cm to mm
            thickness = 10 * (thicknessString.substring(0, thicknessString.length - 3))
          }
          return new Book(title, pageCount, img, thickness);
        })
      }
    })
  }


}
