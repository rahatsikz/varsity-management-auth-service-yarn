import express from 'express'
import { validateRequest } from '../../middlewares/validateRequest'
import { AcademicSemesterController } from './academicSemester.controller'
import { AcademicSemesterValidate } from './academicSemester.validate'

const router = express.Router()

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidate.createAcademicZodSchema),
  AcademicSemesterController.createSemester
)

export const SemesterRoutes = router
