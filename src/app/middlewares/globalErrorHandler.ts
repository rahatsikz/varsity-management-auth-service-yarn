import { ErrorRequestHandler } from 'express'
import config from '../../config'
import { errorLogger } from '../../shared/logger'
import { ApiError } from '../../errors/ApiError'
import { IErrorMsg } from '../../interfaces/IErrorMsg'
import { handleValidationError } from '../../errors/handleValidationError'
import { ZodError } from 'zod'
import { handleZodError } from '../../errors/handleZodError'

const globarErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // eslint-disable-next-line no-unused-expressions
  config.env === 'Development'
    ? // eslint-disable-next-line no-console
      console.log('🚀 global error handler ~ ', err)
    : errorLogger.error('🚀 global error handler ~ ', err)

  let statusCode = 500
  let message = 'Something went wrong'
  let errorMessage: IErrorMsg[] = []

  if (err.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessage = simplifiedError.errorMessage
  } else if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessage = simplifiedError.errorMessage
  } else if (err instanceof ApiError) {
    statusCode = err.statusCode
    message = err.message
    errorMessage = err.message
      ? [
          {
            path: '',
            message: err.message,
          },
        ]
      : []
  } else if (err instanceof Error) {
    message = err.message
    errorMessage = err.message
      ? [
          {
            path: '',
            message: err.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessage,
    stack: config.env === 'Development' && err.stack,
  })

  next()
}

export default globarErrorHandler
