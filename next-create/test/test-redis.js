async function test(){
const Redis = require('ioredis')

const redis = new Redis({
    port:6379,
    // host:'127.0.0.1',
    password: 'sandra'
})

await redis.setex('c', 10, 123)
const keys = await redis.keys('*')
console.log(await redis.get('a'))
}
test()