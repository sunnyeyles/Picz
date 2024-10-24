import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import bcrypt from 'bcrypt'
import { User } from '@prisma/client'

const jwtSecret = process.env.JWT_SECRET || 'defaultSecret'

interface IUserJWT {
  id: string
  username: string
}

interface IAuthenticatedRequest extends Request {
  user?: IUserJWT
}

export const createJWT = (user: User) => {
  const token = jwt.sign({ id: user.id, username: user.username }, jwtSecret)
  return token
}

export const protect = (
  req: IAuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const bearer = req.headers.authorization
  console.log('headers', req.headers)

  if (!bearer) {
    res.status(401)
    res.json({ message: 'not authorized, no bearer' })
    return
  }
  const [, token] = bearer.split(' ')
  if (!token) {
    res.status(401)
    res.json({ message: 'not authorized, no token' })
    return
  }
  try {
    const payload = jwt.verify(token, jwtSecret) as IUserJWT
    req.user = { id: payload.id, username: payload.username }
    next()
    return
  } catch (e) {
    console.error(e)
    res.status(401)
    res.send('not authorized from catch block')
    return
  }
}

export const comparePasswords = (password: string, hash: string) => {
  return bcrypt.compare(password, hash)
}

export const hashPassword = (password: string): Promise<string> => {
  return bcrypt.hash(password, 5)
}
