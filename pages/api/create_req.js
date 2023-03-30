export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  

    const fechaActual = new Date().toISOString().slice(0, 19).replace('T', ' ');
    // Guard clause checks for first and last name,
    // and returns early if they are not found
  
    require('dotenv').config()
    const mysql = require('mysql2')
    const connection = mysql.createConnection(process.env.DATABASE_URL)
    console.log('Connected to PlanetScale!')
  
    const sql = 'INSERT INTO Request (paciente_name, hospital_name , blood_type , phone , description , created_at, active) VALUES (?, ?, ?, ?, ?, ?, ?)';

    // Ejecutar la consulta SQL con los valores correspondientes
    const valores = [`${body.p_name}`, `${body.h_name}`, `${body.b_type}`, `${body.p_number}`, `${body.descrip}`, fechaActual, 1];
    connection.query(sql, valores, function(err, result) {
      if (err) throw err;
      console.log('Filas afectadas:', result.affectedRows);
      res.redirect(301, '/homepage')
      res.status(200).json({ data: `${body.email} ${body.password}` })
    });
    
    // Cerrar la conexión a la base de datos
    connection.end();
  
  }
  