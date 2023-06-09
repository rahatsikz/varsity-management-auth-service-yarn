import { NextFunction, Request, Response } from 'express'
import { UserService } from './user.service'
import { catchAsync } from '../../../shared/catchAsync'
import { sendResponse } from '../../../shared/sendResponse'
import { IUser } from './user.interface'
import httpStatus from 'http-status'
const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...user } = req.body
    const result = await UserService.createUser(user)
    // res.status(200).json({
    //   success: true,
    //   message: 'User created Successfully',
    //   data: result,
    // })

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created Successfully',
      data: result,
    })
    next()
  }
)

export const UserController = {
  createUser,
}
