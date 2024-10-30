import { Response } from 'express'
import { Prisma } from '@prisma/client'

export const handleDbErrors = (e: unknown, res: Response): void => {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    res
      .send(500)
      .json({ error: `an error occurred, the error code is: ${e.code}` })
  } else if (e instanceof Prisma.PrismaClientUnknownRequestError) {
    res.status(500).json({ error: 'an unknown error occurred' })
  } else {
    throw e
  }
}
