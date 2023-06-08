import express, { Application } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/user/user.route'
// import { ApiError } from './errors/ApiError'
import globarErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', () => {
  //   res.send('Hello World!')
  //   throw new ApiError(400, 'Myself error')
  //   next('error ashse')
})

app.use('/api/v2/user', UserRoutes)

app.use(globarErrorHandler)

export default app
