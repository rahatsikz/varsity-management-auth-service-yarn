import { User } from './user.model'

const lastUserID = async () => {
  const lastUser = await User.findOne({}, { _id: 0, id: 1 })
    .sort({
      createdAt: -1,
    })
    .lean()
  return lastUser?.id
}

export const generateUserID = async () => {
  const id = (await lastUserID()) || (0).toString().padStart(5, '0')
  const incrementID = (parseInt(id) + 1).toString().padStart(5, '0')
  return incrementID
}
