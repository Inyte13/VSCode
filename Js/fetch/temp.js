import { URL } from './config.js'
import { getPosts } from './routers.js'

const data = await getPosts(URL)
console.log(data.slice(0, 10))


