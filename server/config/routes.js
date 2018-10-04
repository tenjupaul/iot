var mongoose = require('mongoose')

var Device = require('../controllers/devices.js')

module.exports=function(app){
    app.post('/device',Device.create)
    app.get('/device',Device.getAllDevices)
    app.get('/device/:id',Device.getDeviceByID)
    app.put('/device/:id',Device.updateDevice)
    app.delete('/device/:id',Device.deleteDevice)
}