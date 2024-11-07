import multer from 'multer'
import { uploadNewImage, getAllImages } from '../services/s3'
import { Request, Response } from 'express'
import { randomUUID } from 'crypto'

const upload = multer()

interface IRequestWithImage extends Request {
  file?: Express.Multer.File
}

export const uploadImageHandler = async (
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
  } catch (e) {
    res.status(500).json({ message: 'error uploading image', e })
  }
}
export const getAllImagesHandler = async (res: Response) => {
  try {
    const images = await getAllImages()
    if (images.length) {
      res.send(200).json({ message: 'here are the images' })
    } else if (!images.length) {
      res.send(204).json({ message: 'no images were found' })
    }
  } catch (e) {
    res.send(500).json({ message: 'server error' })
    throw e
  }
}
