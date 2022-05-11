const dataConn = require('./HaciaBasep2');
const mysql = require('mysql');

const  Inserta_alumnos = async (req, res) => {
  const pool = await dataConn.getConnection();
  const result = await pool.request().query(" INSERT INTO alumnos(Nombre, Identificador, Email, Carrera) VALUES('David', '1','a00825156@itesm.mx','ITI'),('INVENTAR_NOMBRE', '2','INVENTAR_CORREO','INVENTAR_CARRERA'),('Goku', '2','goku@kamehouse.jp','P'),('Vegeta', '1','vegeta@saiyan.jp','P') " );
  //return res.json(result.recordset);
  console.log(res.json(result.recordset));
};

const  Consulta_alumnos = async (req, res) => {
  const pool = await dataConn.getConnection();
  const result = await pool.request().query(' SELECT * FROM alumnos ');
 // return res.json(result.recordset);
 console.log(res.json(result.recordset));
};

const  Actualizar_alumnos = async (req, res) => {
  const pool = await dataConn.getConnection();
  const result = await pool.request().query(" UPDATE alumnos SET Nombre = 'BORRAR ALUMNO' WHERE Id = 2 ");
  //return res.json(result.recordset);
  console.log(res.json(result.recordset));
};

const Borrar_alumnos =async (req, res) => { const pool = await dataConn.getConnection();
  const result = await pool.request().query(" DELETE FROM alumnos WHERE Id = 2 ");
  //return res.json(result.recordset);
  console.log(res.json(result.recordset));
};

//Inserta_alumnos;
Consulta_alumnos;
//Actualizar_alumnos;
//Borrar_alumnos;
