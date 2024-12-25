const rideModel=require('../model/ride.model');

module.exports.createRide=async(req, res, next)=>{
    const { pickup,destination}=req.body;

    const newRide=new rideModel({
        user: req.user._id,
        pickup,
        destination
    })

    await newRide.save();
    publishToQueue("new-ride",JSON.stringify(newRide));
    res.send(newRide);
}