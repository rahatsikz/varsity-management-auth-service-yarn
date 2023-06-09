import express from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { SemesterRoutes } from '../modules/academicSemester/academicSemester.route'

const router = express.Router()

const moduleroutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/semester',
    route: SemesterRoutes,
  },
]

moduleroutes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
