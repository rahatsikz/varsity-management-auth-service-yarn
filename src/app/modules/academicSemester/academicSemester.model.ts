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

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema
)
