import { Router, Request, Response } from 'express'
import { body, query, validationResult, oneOf } from 'express-validator'
import { handleInputErrors } from '../middlewares/middleware'
import { deleteProduct } from '../handlers/product'
const router = Router()

router.get('/', (res: Response) => {
  res.json({ message: 'hello' })
})

// PRODUCT
// GET
router.get('/product/:id', () => {})

// POST
// router.post(
//   '/product/:id',
//   body('title').exists().isString(),
//   body('body').exists().isString(),
//   handleInputErrors,
//   (req: Request, res: Response) => {
//     res.json({ message: 'yo' })
//     return
//   }
// )
// PUT
router.put(
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
router.delete(
  '/product:id',
  // body('name').isString(),
  // body('id').isString(),
  handleInputErrors
  // deleteProduct
)

// UPDATE
// GET
router.get('/update/:id', () => {})
router.put(
  '/update/:id',
  body('title').optional(),
  body('body').optional(),
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
  () => {}
)
// POST
router.post(
  '/update',
  body('title').exists().isString(),
  body('body').exists().isString(),
  () => {}
)
// DELETE
router.delete('/update:id', () => {})

// UPDATE POINT
// GET
router.get('/updatepoint/:id', () => {})
// PUT
router.put(
  '/updatepoint/:id',
  body('name').optional().isString(),
  body('description').optional().isString(),
  () => {}
)
// POST
router.post(
  '/updatepoint',
  body('name').exists().isString(),
  body('description').exists().isString(),
  body('updateId').exists().isString(),
  () => {}
)
// DELETE
router.delete('/updatepoint:id', () => {})

export default router

// import { Router } from 'express'
// import { body, oneOf, validationResult } from 'express-validator'
// import {
//   createProduct,
//   deleteProduct,
//   getOneProduct,
//   getProducts,
// } from './handlers/product'
// import {
//   createUpdate,
//   deleteUpdate,
//   getOneUpdate,
//   getUpdates,
//   updateUpdate,
// } from './handlers/update'
// import { handleInputErrors } from './modules/middleware'

// const router = Router()

// /**
//  * Product
//  */
// router.get('/product', getProducts)
// router.get('/product/:id', getOneProduct)
// router.put(
//   '/product/:id',
//   body('name').isString(),
//   handleInputErrors,
//   (req, res) => {}
// )
// router.post(
//   '/product',
//   body('name').isString(),
//   handleInputErrors,
//   createProduct
// )
// router.delete('/product/:id', deleteProduct)

// /**
//  * Update
//  */

// router.get('/update', getUpdates)
// router.get('/update/:id', getOneUpdate)
// router.put(
//   '/update/:id',
//   body('title').optional(),
//   body('body').optional(),
//   body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
//   body('version').optional(),
//   updateUpdate
// )
// router.post(
//   '/update',
//   body('title').exists().isString(),
//   body('body').exists().isString(),
//   body('productId').exists().isString(),
//   createUpdate
// )
// router.delete('/update/:id', deleteUpdate)

// /**
//  * Update Point
//  */

// router.get('/updatepoint', () => {})
// router.get('/updatepoint/:id', () => {})
// router.put(
//   '/updatepoint/:id',
//   body('name').optional().isString(),
//   body('description').optional().isString(),
//   () => {}
// )
// router.post(
//   '/updatepoint',
//   body('name').isString(),
//   body('description').isString(),
//   body('updateId').exists().isString(),
//   () => {}
// )
// router.delete('/updatepoint/:id', () => {})

// export default router
