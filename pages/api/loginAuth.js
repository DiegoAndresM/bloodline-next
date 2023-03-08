import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

export default function handler(req, res) {
   
    const body = req.body
  
   
    console.log('body: ', body)
  
   
    if (!body.email || !body.password) {
      
      return res.status(400).json({ data: 'Email or password not found' })
    }
  
    
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(body.password, saltRounds);
  
    
    require('dotenv').config()
    const mysql = require('mysql2')
    const connection = mysql.createConnection(process.env.DATABASE_URL)
    console.log('Connected to PlanetScale!')
  
    connection.query('SELECT * FROM Direct_Users WHERE email = ?',[`${body.email}`], function(err, results, fields) {
      if (err) {
        console.error(err);
        return res.status(500).json({ data: 'Internal server error' })
      } else {
       
        if (results.length > 0 && bcrypt.compareSync(body.password, results[0].password)) {

         
          const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, 
            email: `${body.email}`, 
            password: hashedPassword,
          }, process.env.JWT_SECRET) 

          const serialCookie = serialize('authCookie', token, {

            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 30,
            path: '/'
          });       

          console.log("Accedio");

         
          res.setHeader('Set-Cookie', serialCookie);

          return res.status(200).json({ message: 'Connected' });
          
        } else {
          console.log("Not connected");
          return res.status(401).json({ message: 'Incorrect email or password' });
        }
      }
    })
  } 