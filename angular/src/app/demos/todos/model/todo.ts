export interface Todo {
  id?: string
  name: string
  isComplete: boolean
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
  userId?: string
  user: User
}

export interface User {
  id?: string
  email: string
  password: string
  role: string
  createdAt?: string
  updatedAt?: string
  deletedAt?: string
}
