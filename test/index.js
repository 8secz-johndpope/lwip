var path = require('path'),
    lwip = require('../'),
    file = path.join(__dirname,'lena.jpg');
lwip.open(file, function(err, image) {
    if (err) return console.log(err);
    console.log(image.width(),image.height());
});
