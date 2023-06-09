import { Response } from 'express'

type ISendResponse<T> = {
  statusCode: number
  success: boolean
  message?: string | null
  data: T | null
}
export const sendResponse = <T>(res: Response, data: ISendResponse<T>) => {
  const responseData: ISendResponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message,
    data: data.data,
  }

  res.status(data.statusCode).json(responseData)
}
