import { S3Client } from '@aws-sdk/client-s3'
import { PutObjectCommand } from '@aws-sdk/client-s3'
const accessKey = process.env.AWS_ACCESS_KEY_ID
const secretKey = process.env.AWS_SECRET_ACCESS_KEY

interface IImage {
  key: string
  body: Buffer
}

export const s3Client = new S3Client({
  region: 'eu-west-3',
  credentials: {
    accessKeyId: accessKey!,
    secretAccessKey: secretKey!,
  },
})

export const uploadNewImage = async ({ key, body }: IImage) => {
  try {
    await s3Client.send(
      new PutObjectCommand({
        Bucket: 'picz-image-upload-platform',
        Key: key,
        Body: body,
        ContentType: 'image/jpeg',
      })
    )
    console.log('S3 Upload Response:', Response)
    return
  } catch (err) {
    console.log(err)
  }
}
