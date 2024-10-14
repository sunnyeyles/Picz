import { Router, Request, Response } from 'express'
import { body, query, validationResult, oneOf } from 'express-validator'
import { handleInputErrors } from '../middlewares/middleware'
import { deleteProduct } from '../handlers/product'
import { createNewUser } from '../handlers/user'
const userRouter = Router()

userRouter.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello' })
})

// PRODUCT
// GET
userRouter.get('/product', (res: Response) => {
  res.json({ message: 'hello' })
})
// userRouter.get('/product/:id', () => {})

// POST
// userRouter.post('/user/newuser', () => {
//   createNewUser
// })
userRouter.post('/user/newuser/', createNewUser)

// userRouter.post(
//   '/product/:id',
//   body('body').exists().isString(),
//   handleInputErrors,
//   (req: Request, res: Response) => {
//     res.json({ message: 'yo' })
//     return
//   }
// )
// PUT
userRouter.put(
  '/product/:id',
  body('title').optional(),
  body('body').optional(),
  oneOf([body('IN_PROGRESS'), body('SHIPPED'), body('DEPRICATED')]),
  body('version').optional(),
  handleInputErrors,
  (req: Request, res: Response) => {
    res.json({ message: 'yo' })
    return
  }
)
// DELETE
userRouter.delete(
  '/product:id',
  // body('name').isString(),
  // body('id').isString(),
  handleInputErrors
  // deleteProduct
)

export default userRouter
