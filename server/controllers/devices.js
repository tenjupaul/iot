var mongoose = require('mongoose')
Device = mongoose.model('Device')

module.exports={
    create:function(req,res){
        Device.create(req.body,function(err,device){
            if(err){
                console.log(err);
                res.json({message: "Error", status:500, error: err})
            }
            else{
                res.json({message: "Success", status:200, device:device})
            }
        })
    },
    getAllDevices:function(req,res){
        Device.find({},function(err,devices){
            if(err){
                console.log(err);
                res.json({message: "Error", status:500, error: err})
            }
            else{
                res.json({message: "Success", status:200, devices:devices})
            }
        })
    },
    getDeviceByID:function(req,res){
        Device.findById({_id:req.params.id},function(err,device){
            if(err){
                console.log(err)
                res.json({message: "Error", status:500, error: err})
            }
            else{
                res.json({message: "Success", status:200, device:device})
            }
        })
    },
    updateDevice:function(req,res){
        Device.update({_id:req.params.id},req.body,function(err,device){
            if(err){
                console.log(err)
                res.json({message: "Error", status:500, error: err})
            }
            else{
                res.json({message: "Success", status:200, device:device})
            }
        })
    },
    deleteDevice:function(req,res){
        Device.remove({_id:req.params.id},function(err){
            if(err) {
                return res.json(err);
            }
            else {
                return res.json({message:"removed", status:200})
            }
        })
    }
}