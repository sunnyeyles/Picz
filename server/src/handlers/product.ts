import { Request, Response } from 'express'
import prisma from '../modules/db'
import { User } from '@prisma/client'

interface IRequestWithUser extends Request {
  user: User
}

// get all
export const getProducts = async (req: IRequestWithUser, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      products: true,
    },
  })
  res.json({ data: user?.products })
}

// get one
export const getOneProduct = async (req: IRequestWithUser, res: Response) => {
  const id = req.params.id
  const product = await prisma.product.findFirst({
    where: { id, belongsToId: req.user.id },
  })
  res.json({ data: product })
}

export const createProduct = async (req: IRequestWithUser, res: Response) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsToId: req.user.id,
    },
  })
}
// delete one
export const deleteProduct = async (req: Request, res: Response) => {
  const product = req.params
  console.log(product)
  try {
    const product = req.params
    console.log('the product', product)
    res.json({ params: product })
  } catch (error) {
    console.log(error)
  }
}

// find one
export const findOneProduct = async (req: Request, res: Response) => {
  const product = req.params
  console.log(product)
  try {
    const product = req.params
    console.log('the product', product)
    res.json({ params: product })
  } catch (error) {
    console.log(error)
  }
}
