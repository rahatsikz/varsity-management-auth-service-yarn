import express from 'express'
import { UserController } from './user.controller'
import { validateRequest } from '../../middlewares/validateRequest'
import { userValidate } from './user.validate'

const router = express.Router()

router.post(
  '/create-user',
  validateRequest(userValidate.createUserZodSchema),
  UserController.createUser
)

export const UserRoutes = router
