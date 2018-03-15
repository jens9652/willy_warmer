var product = {
  changeColor: function (event, color, id) {
    var productImage = this.findImage(id);

    var src = productImage.getAttribute('src');
    var newSrc = src.replace(/_.*.jpg/, '_' + color + '.jpg');

    productImage.setAttribute('src', newSrc);
  },

  findImage: function (id) {
    return document.getElementById('product-'+id);
  }

}