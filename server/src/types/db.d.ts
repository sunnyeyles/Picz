export enum UpdateStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  LIVE = 'LIVE',
  DEPRECATED = 'DEPRECATED',
  ARCHIVED = 'ARCHIVED',
}

export interface User {
  id: string
  createdAt: Date
  username: string
  password: string
  products?: Product[]
}

export interface Product {
  id: string
  createdAt: Date
  name: string
  belongsToId: string
  belongsTo?: User
  updates?: UpdatePoint[]
}

// UpdatePoint Type
export interface UpdatePoint {
  id: string
  createdAt: Date
  updatedAt: Date
  title: string
  body: string
  status: UpdateStatus
  version?: string
  asset: string
  productId: string
  product?: Product
  updateId: string
  update?: Update
}

// Update Type
export interface Update {
  id: string
  createdAt: Date
  title: string
  updatePoints?: UpdatePoint[]
}
