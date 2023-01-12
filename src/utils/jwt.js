import jwt from 'jsonwebtoken'

export default {
    sign: (payload) => jwt.sign(payload, process.env.SECRET_KEY),
    verify: (payload) => jwt.verify(payload, process.env.SECRET_KEY)
}