import multer from 'multer'
const upload = multer()
import { Image } from '@prisma/client'
import { uploadNewImage } from '../services/s3'
import { Request, Response } from 'express'

interface IRequestWithImage extends Request {
  image?: Image
}

export const uploadImage = async (
  req: IRequestWithImage,
  res: Response
): Promise<void> => {
  try {
    upload.single('file')
    uploadNewImage({ key: 'something', body: 'somethinggggg' })
    res.status(200).json({ message: 'image successfully uploaded' })
    return
  } catch (error) {
    res.status(500).json({ message: 'error creating user', error })
    return
  }
}
