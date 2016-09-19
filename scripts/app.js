
var app = {};
// ON DOCUMENT READY
$(function(){
  app["shelvesController"] = new ShelvesController;
  app["booksController"]   = new BooksController;
})
