var mysql = require ('mysql');

var HDB = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "parcial2_a00825156",
port: "3306"
});

/*
async function getConnection(){
  try{
      const pool = await mysql.createConnection(dbSettings);
      return pool;
  }
  catch(error){
      console.error(error);
  }
}
*/

var Consultar_alumnos= HDB.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  HDB.query(" SELECT * FROM alumnos " , function (err, result, fields) {
      if (err) throw err;
      console.log(result);
  });
});

var  Actualizar_alumnos  = HDB.connect(function(err) {
  console.log("Connected!");
  HDB.query(" UPDATE alumnos SET Nombre = 'BORRAR ALUMNO' WHERE Id = 2 " , function (err, result, fields) {
      if (err) throw err;
      console.log(result);
  });
});

var  Inserta_alumnos = HDB.connect(function(err) {
  console.log("Connected!");
  HDB.query(" INSERT INTO alumnos(Nombre, Identificador, Email, Carrera) VALUES('David', '1','a00825156@itesm.mx','ITI'),('INVENTAR_NOMBRE', '2','INVENTAR_CORREO','INVENTAR_CARRERA'),('Goku', '2','goku@kamehouse.jp','P'),('Vegeta', '1','vegeta@saiyan.jp','P') " , function (err, result, fields) {
      if (err) throw err;
      console.log(result);
  });
});

var  Borrar_alumnos = HDB.connect(function(err) {
  console.log("Connected!");
  HDB.query(" DELETE FROM alumnos WHERE Id = 2 " , function (err, result, fields) {
      if (err) throw err;
      console.log(result);
  });
});
/**/

Consultar_alumnos;