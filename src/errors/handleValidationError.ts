import mongoose from 'mongoose'
import { IErrorMsg } from '../interfaces/IErrorMsg'
import { IError } from '../interfaces/IError'

export const handleValidationError = (
  err: mongoose.Error.ValidationError
): IError => {
  const errors: IErrorMsg[] = Object.values(err.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      }
    }
  )

  const statusCode = 400
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  }
}
