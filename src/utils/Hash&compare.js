import bcrypt from 'bcryptjs'


export const hash = ({ plaintext, saltRound = 8 } = {}) => {
    const hashResult = bcrypt.hashSync(plaintext, parseInt(saltRound))
    return hashResult
}


export const compare = ({ plaintext, hashValue } = {}) => {
    const match = bcrypt.compareSync(plaintext, hashValue)
    return match
}