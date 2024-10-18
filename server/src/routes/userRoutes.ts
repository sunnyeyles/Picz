import { Router, Request, Response } from 'express'
import { body, query, validationResult, oneOf } from 'express-validator'
import { handleInputErrors } from '../middlewares/middleware'
import { createNewUser } from '../handlers/userHandlers'
import { signIn } from '../handlers/userHandlers'
const userRouter = Router()

userRouter.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello' })
})

userRouter.post('/user/newuser/', createNewUser)
userRouter.post('/user/signin/', signIn)

// DELETE
userRouter.delete(
  '/product:id',
  // body('name').isString(),
  // body('id').isString(),
  handleInputErrors
)

export default userRouter
