var mongoose = require('mongoose')

var DeviceSchema = new mongoose.Schema({
    name: {type:String, required:[true, "Device name cannot be empty"],minlength: 4},
    type: {type:String, required:[true, "Device type cannot be empty"]},
    topic: {type:String},
},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }})

mongoose.model('Device', DeviceSchema)