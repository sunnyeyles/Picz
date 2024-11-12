import { Request, Response, NextFunction } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

interface IAuthRequest extends Request {
  user?: string | JwtPayload
}

export const verifyToken = async (
  req: IAuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers['authorization']?.split(' ')[1]

    if (!token) {
      res.status(403).json({ message: 'No token provided' })
      return
    }

    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    console.log('whoops from jwt')
    res.status(401).json({ message: 'Invalid token' })
    return
  }
}

// function authenticateToken(req: Request, res: Response, next: NextFunction) {
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]

//   if (token == null) return res.sendStatus(401)

//   jwt.verify(
//     token,
//     process.env.TOKEN_SECRET as string,
//     (err: any, user: any) => {
//       console.log(err)

//       if (err) return res.sendStatus(403)

//       req.user = user

//       next()
//     }
//   )
// }
