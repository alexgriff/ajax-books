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
