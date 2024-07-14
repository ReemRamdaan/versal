import jwt from 'jsonwebtoken';
export const generateToken=({payload={},signature="c39SundayAAAA25556",expiresIn=60*60}={})=>{
    const token =jwt.sign(payload,signature,{expiresIn});
    return token;
}
export const verifyToken=({token,signature="c39SundayAAAA25556"}={})=>{
    const decoded =jwt.verify(token,signature);
    return decoded;
}