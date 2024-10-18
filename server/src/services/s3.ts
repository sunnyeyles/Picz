import { S3Client } from '@aws-sdk/client-s3'
import { PutObjectCommand } from '@aws-sdk/client-s3'
const accessKey = process.env.AWS_ACCESS_KEY_ID
const secretKey = process.env.AWS_SECRET_ACCESS_KEY

export const s3Client = new S3Client({
  region: 'eu-west-3',
  credentials: {
    accessKeyId: accessKey!,
    secretAccessKey: secretKey!,
  },
})

export const newItem = async () => {
  try {
    await s3Client.send(
      new PutObjectCommand({
        Bucket: 'picz-image-upload-platform',
        Key: 'my-first-object.txt',
        Body: 'Hello JavaScript SDK!',
      })
    )
    console.log('it works')
  } catch (err) {
    console.log(err)
  }
}
