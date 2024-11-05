import * as dotenv from 'dotenv'
dotenv.config()
import app from './server.js'
import prisma from './modules/db.js'
app.listen(3001, () => {
  console.log('hello on http://localhost:3001')
})
const checkDBConnection = async () => {
  try {
    await prisma.$connect()
    console.log('Successfully connected to the database')
  } catch (e) {
    console.error('Failed to connect to the database:', e)
    process.exit(1)
  }
}

checkDBConnection()
