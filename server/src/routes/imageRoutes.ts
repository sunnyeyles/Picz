import { Router, Request, Response } from 'express'

import { uploadImage } from '../handlers/imageHandlers'
const imageRouter = Router()

imageRouter.post('/image/newimage', uploadImage)

export default imageRouter
