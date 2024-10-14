import { Request, Response } from 'express'
import { hashPassword, comparePasswords } from '../modules/auth'
import { createJWT } from '../modules/auth'
import prisma from '../modules/db'
import { User } from '@prisma/client'

interface IRequestWithUser extends Request {
  user?: User
}

// create new user
export const createNewUser = async (
  req: IRequestWithUser,
  res: Response
): Promise<void> => {
  console.log(req.body)

  try {
    console.log(req.body)
    const hashedPassword = await hashPassword(req.body.password)
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashedPassword,
        email: req.body.email,
      },
    })
    const token = createJWT(user)
    res.status(201).json({ token, username: user.username, email: user.email })
    return
  } catch (error) {
    res.status(500).json({ message: 'error creating user', error })
    return
  }
}

// sign in
export const signIn = async (
  req: IRequestWithUser,
  res: Response
): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({
      where: { email: req.body.email },
    })
    if (!user) {
      res.status(401).json({ message: 'invalid credentials' })
      return
    }
    const isValid = await comparePasswords(req.body.password, user.password)
    if (!isValid) {
      res.status(401).json({ message: 'invalid credentials' })
      return
    }
    const token = createJWT(user)
    res.json({ token })
  } catch (error) {
    res.status(500).json({ message: 'error signing in', error })
    return
  }
}
