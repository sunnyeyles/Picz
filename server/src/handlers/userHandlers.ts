import { Request, Response } from 'express'
import { hashPassword, comparePasswords } from '../modules/auth'
import { createJWT } from '../modules/auth'
import prisma from '../modules/db'
import { Prisma, User } from '@prisma/client'
import { handleDbErrors } from './utils'
interface IRequestWithUser extends Request {
  user?: User
}

// create new user
export const createNewUser = async (
  req: IRequestWithUser,
  res: Response
): Promise<void> => {
  try {
    const hashedPassword = await hashPassword(req.body.password)
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
      },
    })
    const token = createJWT(user)
    res.status(201).json({
      message: 'user created successfully',
      user: {
        token,
        username: user.username,
        email: user.email,
      },
    })
    return
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        res.status(409).json({ error: 'user already exists' })
        return
      } else {
        handleDbErrors(e, res)
        return
      }
    }
    throw e
  }
}

// sign in
export const signIn = async (
  req: IRequestWithUser,
  res: Response
): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({
      where: { username: req.body.username },
    })

    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' })
      return
    }

    const isValid = await comparePasswords(req.body.password, user.password)
    if (!isValid) {
      res.status(401).json({ error: 'Invalid credentials' })
      return
    }

    const token = createJWT(user)

    res.status(200).json({
      message: 'User signed in successfully',
      user: {
        token,
        username: user.username,
        email: user.email,
      },
    })
  } catch (error) {
    handleDbErrors(error, res)
  }
}
