import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'

const createAcademicSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  const createdAcademicSemester = await AcademicSemester.create(payload)

  return createdAcademicSemester
}

export const AcademicSemesterService = {
  createAcademicSemester,
}
