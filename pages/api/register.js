export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    const bcrypt = require('bcrypt');
    const salt = bcrypt.genSaltSync(10);
    let pass = body.password;
    let encPassword = bcrypt.hashSync(pass, salt);

    const fechaActual = new Date().toISOString().slice(0, 19).replace('T', ' ');
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.email || !body.password) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'First or last name not found' })
    }
  
    // Found the name.
    // Sends a HTTP success code
    //res.status(200).json({ data: `${body.email} ${body.password}` })
    
  
    require('dotenv').config()
    const mysql = require('mysql2')
    const connection = mysql.createConnection(process.env.DATABASE_URL)
    console.log('Connected to PlanetScale!')
  
    const sql = 'INSERT INTO Direct_Users (username, email, password, active, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)';

    // Ejecutar la consulta SQL con los valores correspondientes
    const valores = [`${body.username}`, `${body.email}`, encPassword, 1, fechaActual, fechaActual];
    connection.query(sql, valores, function(err, result) {
      if (err) throw err;
      console.log('Filas afectadas:', result.affectedRows);
      res.redirect(301, '/login')
      res.status(200).json({ data: `${body.email} ${body.password}` })
    });
    
    // Cerrar la conexión a la base de datos
    connection.end();
  
  }
  