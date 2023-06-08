import { IErrorMsg } from '../interfaces/IErrorMsg'
import { IError } from '../interfaces/IError'
import { ZodError, ZodIssue } from 'zod'

export const handleZodError = (err: ZodError): IError => {
  const errors: IErrorMsg[] = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue?.path.length - 1],
      message: issue?.message,
    }
  })

  const statusCode = 400
  return {
    statusCode,
    message: 'Validation Error',
    errorMessage: errors,
  }
}
