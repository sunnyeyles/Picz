import { Router, Request, Response } from 'express'

import {
  uploadImageHandler,
  getAllImagesHandler,
} from '../handlers/imageHandlers'
const imageRouter = Router()

imageRouter.post('/image/newimage/', uploadImageHandler)
imageRouter.get('/image/getallimages/', getAllImagesHandler)

export default imageRouter
