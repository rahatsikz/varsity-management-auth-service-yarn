import { NextFunction, Request, Response } from 'express'
import { AcademicSemesterService } from './academicSemester.service'
import { catchAsync } from '../../../shared/catchAsync'
import { sendResponse } from '../../../shared/sendResponse'
import httpStatus from 'http-status'

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemester } = req.body
    const result = await AcademicSemesterService.createAcademicSemester(
      academicSemester
    )
    // res.status(200).json({
    //   success: true,
    //   message: 'Academic Semester created Successfully',
    //   data: result,
    // })
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester created Successfully',
      data: result,
    })

    next()
  }
)

export const AcademicSemesterController = {
  createSemester,
}
