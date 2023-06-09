import express, { Application } from 'express'
import cors from 'cors'
// import { ApiError } from './errors/ApiError'
import globarErrorHandler from './app/middlewares/globalErrorHandler'
import routes from './app/routes/index'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// route
app.use('/api/v2', routes)

app.get('/', async () => {
  //   res.send('Hello World!')
  //   throw new ApiError(400, 'Myself error')
  // next('error ashse')
  // Promise.reject(new Error('Unhandled promise rejection'))
  throw new Error('Uncaught exception detected')
})

// app.use('/api/v2/user', UserRoutes)
// app.use('/api/v2/semester', SemesterRoutes)

app.use(globarErrorHandler)

export default app
