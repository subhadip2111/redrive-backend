const Ride = require('../models/ride.model.js');
const { avaiableRideListQueue, suceesFullRideQueue, canceRideQueue, notificationQueue } = require('./bullMqConfig.js');

const addlistToQueue=async (jobs)=>{
    await avaiableRideListQueue.add(jobs);


}


const findJobsAndupdateQueue=async (rideId,)=>{   
    const ride=await Ride.findById(rideId);
    if(!ride){
        throw new Error('No ride found with this id');
    }
    const jobs = await avaiableRideListQueue.getJobs([
        "waiting"
      ]);

      const jobToUpdate=jobs.find((j)=>j._id==rideId)
    //
    if(jobToUpdate){
        jobToUpdate.data.status = 'accepted';
        jobToUpdate.data.driverId = `${driverId}`;

        await suceesFullRideQueue.add(jobToUpdate);
        await notificationQueue.add({rideId,notificationMessage:`Ride ${rideId} is full`});
        await jobToUpdate.remove();

    }else{
        throw new Error('No job found with this ride id');
    }

 }

 const getAllAvaiableRideList=async(

 )=>{

    const jobs = await avaiableRideListQueue.getJobs([
        "waiting"
      ]);
      return jobs.map((job) => job.data);
 }