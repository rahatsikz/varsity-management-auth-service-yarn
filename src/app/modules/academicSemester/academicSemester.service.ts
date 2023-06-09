import { ApiError } from '../../../errors/ApiError'
import { AcademicSemesterTitleCodeMapper } from './academicSemester.constant'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'
import httpStatus from 'http-status'

const createAcademicSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (AcademicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester code')
  }

  const createdAcademicSemester = await AcademicSemester.create(payload)

  return createdAcademicSemester
}

export const AcademicSemesterService = {
  createAcademicSemester,
}
