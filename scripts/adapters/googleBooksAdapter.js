class GoogleBooksAdapter {
  constructor( input ) {
    this.title = input.title;
    this.author = input.author;
    this.key = APIKEY
  }

  buildBook() {
    // TO DO:
    // should make the necessaary api calls and return a new Book object

    // step 1:
    // query the api with title and author to get the volume id
    // a get request to:
    // "https://www.googleapis.com/books/v1/volumes?q=" + adapter.title +"+inauthor:" + adapter.author

    // step 2:
    // query the api with the volume id to get all the info:
    // a get request to:
    // https://www.googleapis.com/books/v1/volumes/"+ volumeId +"?key="+ adapter.key

  }
}
