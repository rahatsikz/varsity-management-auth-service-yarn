import { NextFunction, Request, Response } from 'express'
import { AcademicSemesterService } from './academicSemester.service'

const createSemester = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { ...academicSemester } = req.body
    const result = await AcademicSemesterService.createAcademicSemester(
      academicSemester
    )
    res.status(200).json({
      success: true,
      message: 'Academic Semester created Successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const AcademicSemesterController = {
  createSemester,
}
