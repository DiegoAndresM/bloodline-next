export default function handler(req, res) {
   
    const body = req.body
  
   
    console.log('body: ', body)
  
    const bcrypt = require('bcrypt');
    const salt = bcrypt.genSaltSync(10);
    let pass = body.password;
    let encPassword = bcrypt.hashSync(pass, salt);

    const fechaActual = new Date().toISOString().slice(0, 19).replace('T', ' ');
   
    if (!body.email || !body.password) {
    
      return res.status(400).json({ data: 'First or last name not found' })
    }
  
   
    
  
    require('dotenv').config()
    const mysql = require('mysql2')
    const connection = mysql.createConnection(process.env.DATABASE_URL)
    console.log('Connected to PlanetScale!')
  
    const sql = 'INSERT INTO Direct_Users (username, email, password, active, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)';

   
    const valores = [`${body.username}`, `${body.email}`, encPassword, 1, fechaActual, fechaActual];
    connection.query(sql, valores, function(err, result) {
      if (err) throw err;
      console.log('Filas afectadas:', result.affectedRows);
      res.redirect(301, '/login')
      res.status(200).json({ data: `${body.email} ${body.password}` })
    });
    
 
    connection.end();
  
  }
  