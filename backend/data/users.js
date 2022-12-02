import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Madara Uchiha',
    email: 'madara@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Vegeta',
    email: 'vegeta@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
