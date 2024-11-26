import { Queue } from 'bullmq';
import redisConnection from './redisConfig.js';

const avaiableRideListQueue = new Queue('avaiableRideList', { redis: redisConnection });
const suceesFullRideQueue = new Queue('sucesfullRide', { redis: redisConnection });
const canceRideQueue = new Queue('cancelRideQueue', { redis: redisConnection });
const notificationQueue = new Queue('notificationQueue', { redis: redisConnection });

// Add more queues as needed...
module.exports = {
  avaiableRideListQueue,
  suceesFullRideQueue,
  canceRideQueue,notificationQueue
};
