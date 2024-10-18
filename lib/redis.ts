import Redis from "ioredis";

const REDIS_URI = process.env.REDIS_URI || "";

if (!REDIS_URI) {
  throw new Error("Please define the REDIS_URI environment variable.");
}

const redis = new Redis(REDIS_URI);

export default redis;
