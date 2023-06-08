import { IErrorMsg } from './IErrorMsg'

export type IError = {
  statusCode: number
  message: string
  errorMessage: IErrorMsg[]
}
