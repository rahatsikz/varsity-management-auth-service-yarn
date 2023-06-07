import app from './app'
import config from '../src/config/index'
import mongoose from 'mongoose'

async function mainFunc() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('🔋 Database Connected')

    app.listen(config.port, () => {
      console.log(`Management app listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('error found', error)
  }
}

mainFunc()
