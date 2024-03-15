import { Redis } from '@upstash/redis'
import "server-only"
export const redis = new Redis({
  url: process.env.REDIS_URL!,
  token: process.env.REDIS_SECRET!,
})
// console.log(process.env.REDIS_URL,process.env.REDIS_SECRET,"redis",redis)