class Book {
  constructor(title, pageCount, img, thickness) {
    this.title = title;
    this.pageCount = pageCount;
    this.img = img;
    this.thickness = thickness || this.estimateThickness();
  }


  estimateThickness() {
    var pageWidth = 0.05
    var coverWidth= 0.40;
    var pageThickness;
    var bookThickness;

    pageThickness = this.pageCount * pageWidth;
    bookThickness = pageThickness + coverWidth;

    return Math.floor(bookThickness);
  }
}

// app.book = {
//   model: {
//     new: (function(){
//       var counter = 0;
//
//       function Book(title, pageCount, img, thickness){
//         this.title = title;
//         this.pageCount = pageCount;
//         this.img = img;
//         this.id = ++counter;
//         app.book.model.all.push(this);
//       }
//
//       // most books have a thickness from the Api,
//       // for those that don't we need to make up some
//       // value
//       Book.prototype.estimateThickness = function(){
//         // 0.05mm
//         var pageWidth = 0.05
//         // adapted from http://www.bookmobile.com/art-book-printing/calculating-spine-width-and-book-weight-before-your-book-is-printed/
//         // converted to mm
//         var coverWidth= 0.39624;
//         var pageThickness;
//         var bookThickness;
//
//         pageThickness = this.pageCount * pageWidth;
//         bookThickness = pageThickness + coverWidth;
//
//         return Math.floor(bookThickness);
//       }
//
//       return Book;
//     }()),
//
//     all: [],
//
//     find: (function(id){
//       return $.grep(app.book.model.all, function(book) {
//         return book.id == id
//       })[0];
//     })
//
//   }
// }
