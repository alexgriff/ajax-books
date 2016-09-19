// global variable app
var app = {};
// ON DOCUMENT READY
$(function(){
  app.controllers = {
    shelves: new ShelvesController,
    books: new BooksController
  }

})
