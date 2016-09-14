var app = {}

// ON DOCUMENT READY
$(function(){
  // initialize shelf model
  var shelf = new app.shelf.model.new();

  // render shelf space and hide until first book
  app.shelf.controller.show.render(shelf);
  $('.shelf').hide();
  $('.shelfContents').hide();

  // add listeners
  $('input:submit').click(function(){
    // fn to add a book to shelf
  });

  $('body').on("click", ".book", function() {
    // fn to remove book from shelf
  })

})
