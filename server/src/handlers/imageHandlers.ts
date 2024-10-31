import multer from 'multer'
import { uploadNewImage } from '../services/s3'
import { Request, Response } from 'express'
import { randomUUID } from 'crypto'

const upload = multer()

interface IRequestWithImage extends Request {
  file?: Express.Multer.File
}

export const uploadImage = async (
  req: IRequestWithImage,
  res: Response
): Promise<void> => {
  try {
    upload.single('file')(req, res, async (e: any) => {
      if (e) {
        return res
          .status(500)
          .json({ message: 'error uploading file', error: e })
      }

      if (!req.file) {
        return res.status(400).json({ message: 'did not get file' })
      }

      const fileBuffer = req.file.buffer
      const fileKey = randomUUID()

      await uploadNewImage({
        key: fileKey,
        body: fileBuffer,
      })

      res.status(200).json({ message: 'image successfully uploaded' })
    })
  } catch (error) {
    res.status(500).json({ message: 'error uploading image', error })
  }
}
