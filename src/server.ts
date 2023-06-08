import app from './app'
import config from '../src/config/index'
import mongoose from 'mongoose'
import { logger, errorLogger } from './shared/logger'

async function mainFunc() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('🔋 Database Connected')

    app.listen(config.port, () => {
      logger.info(`Management app listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('error found', error)
  }
}

mainFunc()
