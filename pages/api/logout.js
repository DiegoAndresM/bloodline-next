import { verify } from "jsonwebtoken";
import { serialize } from "cookie";

export default function logoutHandler(req, res){
    const {authCookie} = req.cookies

    if (!authCookie){
        return res.status(401).json({ message: 'La sesion no existe' });
        
    }

    try{

        verify(authCookie, process.env.JWT_SECRET)

        const serialCookie = serialize('authCookie', null, {

            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', //Needs a ssl certificate to work, but NODE_ENV checks if we are in production or not.
            sameSite: 'strict',
            maxAge: 0,
            path: '/'
          })   

          res.setHeader('Set-cookie', serialCookie)
          return res.status(200).json({ message: 'Sesion cerrrada' });

    } catch (error) {
        return res.status(401).json({ message: 'Token invalido' });
        
    }
}