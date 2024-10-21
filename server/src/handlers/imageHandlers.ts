import multer from 'multer'
import { uploadNewImage } from '../services/s3'
import { Request, Response } from 'express'

// Configure multer to handle the file upload
const upload = multer()

interface IRequestWithImage extends Request {
  file?: Express.Multer.File
}

export const uploadImage = async (
  req: IRequestWithImage,
  res: Response
): Promise<void> => {
  try {
    upload.single('file')(req, res, async (err: any) => {
      if (err) {
        return res
          .status(500)
          .json({ message: 'Error uploading file', error: err })
      }

      if (!req.file) {
        return res.status(400).json({ message: 'Did not get file' })
      }

      const fileBuffer = req.file.buffer
      const fileKey = req.file.originalname

      await uploadNewImage({
        key: fileKey,
        body: fileBuffer,
      })

      res.status(200).json({ message: 'Image successfully uploaded' })
    })
  } catch (error) {
    res.status(500).json({ message: 'Error uploading image', error })
  }
}
