import * as dotenv from 'dotenv'
dotenv.config()
import { newItem } from './services/s3.js'
import app from './server.js'
app.listen(3001, () => {
  console.log('hello on http://localhost:3001')
})
newItem()
