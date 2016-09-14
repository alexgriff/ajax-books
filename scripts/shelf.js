app.shelf={
  // ----------
  //   MODEL
  // ----------
  model:{
    new:(function(){
      function Shelf(){
        this.length= 100; //millimeters;
        this.totalBookLength = 0;
        this.books = []
      }

      // Prototypes
      Shelf.prototype.remainingSpace = function(){
        var space;
        space = this.length - this.totalBookLength;

        return space;
      }

      Shelf.prototype.addBook= function(book){
      // fn to addBook to shelf
      }

      Shelf.prototype.isThereRoom = function(book){
        if ((this.totalBookLength + book.thickness) > this.length) {
          return false;
        } else {
          return true;
        }
      }

      Shelf.prototype.fallsOff = function(){
        //remove first book
        return this.books.splice(0, 1)[0];
      }

      return Shelf;
    }())
  },


  // ----------------
  //   CONTROLLER
  // ----------------
  controller: {
    show: {
      render: function(shelf){
        // clear out what's there
        $('.shelfInfo').empty();
        $('.shelf').empty();
        $('.shelfContents ul').empty();

        // update spaceinfo
        $('.shelfInfo').append('<p>Your book shelf has <strong>'+ shelf.remainingSpace() +'</strong> millimeters of free space</p>')

        // render each book on shelf and add info
        for(var i = 0; i < shelf.books.length; i ++){
          var book;
          book = shelf.books[i];
          app.book.controller.show.render(book);
          $('.shelfContents ul').append('<li>' + book.title + " - " + book.pageCount + ' pages</li>')
        }

      }
    }

  }

}
