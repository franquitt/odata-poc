var odata = require('node-odata');

var server = odata('mongodb://db:27017/odata');

server.resource('books', {
  book: String,
  cost: Number,
  description: String
});

server.listen(3000);
console.log("Corriendo en http://localhost:3000");
