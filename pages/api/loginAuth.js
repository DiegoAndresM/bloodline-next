import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for email and password.
    // Returns early if they are not found.
    if (!body.email || !body.password) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Email or password not found' })
    }
  
    // Hash the password entered by the user for comparison.
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(body.password, saltRounds);
  
    // Connect to the database and perform a query.
    require('dotenv').config()
    const mysql = require('mysql2')
    const connection = mysql.createConnection(process.env.DATABASE_URL)
    console.log('Connected to PlanetScale!')
  
    connection.query('SELECT * FROM Direct_Users WHERE email = ?',[`${body.email}`], function(err, results, fields) {
      if (err) {
        console.error(err);
        return res.status(500).json({ data: 'Internal server error' })
      } else {
        // Check if the user exists and the password matches.
        if (results.length > 0 && bcrypt.compareSync(body.password, results[0].password)) {

          //Creates a constant that will storage our token
          const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, //Set an expire date to our token
            email: `${body.email}`, //we pass the session infromation  to the token
            password: hashedPassword,
          }, process.env.JWT_SECRET) //Pass the secret password/key to acces the token

          const serialCookie = serialize('authCookie', token, {

            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', //Needs a ssl certificate to work, but NODE_ENV checks if we are in production or not.
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 30,
            path: '/'
          });       //Serialize the token to transform it to a cookie

          console.log("Accedio");

          //Make the cookie: we pass the Set-Cookie instruction
          res.setHeader('Set-Cookie', serialCookie);

          return res.status(200).json({ message: 'Conected' });
          
        } else {
          console.log("Not Conected");
          return res.status(401).json({ message: 'Incorrect email or password' });
        }
      }
    })
  } 