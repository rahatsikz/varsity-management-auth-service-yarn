import { Schema, model } from 'mongoose'
import {
  AcademicSemesterCodes,
  AcademicSemesterMonths,
  AcademicSemesterTitles,
} from './academicSemester.constant'
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface'
import { ApiError } from '../../../errors/ApiError'
import httpStatus from 'http-status'

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: { type: String, required: true, enum: AcademicSemesterTitles },
    year: { type: Number, required: true },
    code: { type: String, required: true, enum: AcademicSemesterCodes },
    startMonth: { type: String, required: true, enum: AcademicSemesterMonths },
    endMonth: { type: String, required: true, enum: AcademicSemesterMonths },
  },
  {
    timestamps: true,
  }
)

academicSemesterSchema.pre('save', async function (next) {
  const isExists = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  })
  if (isExists) {
    throw new ApiError(httpStatus.CONFLICT, 'Academy semester already exists')
  }
  next()
})

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)
