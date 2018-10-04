var mongoose = require('mongoose');
var path = require('path')
var fs = require('fs')
mongoose.connect('mongodb://localhost:27017/iot_dev_1',{useNewUrlParser: true })
var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
  if(file.endsWith('.js')) {

    require(models_path + '/' + file);
   }
})
