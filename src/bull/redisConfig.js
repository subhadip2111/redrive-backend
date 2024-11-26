const Redis = require("ioredis");
const redisConfig={
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
}
const redisConnection = new Redis(redisConfig);

export default redisConnection;   