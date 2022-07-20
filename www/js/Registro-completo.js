
$$(document).on('page:init', '.page[data-name="regcompleto"]', function (e) { 
  $$('#hola').on('click',fnRegistrocompleto)
})


function fnRegistrocompleto() {

  console.log("inicia la funcion")

  Identificador = email;
  //recuperacion de datos del registro

    Nombres = $$('#rNombres').val();
    Telefono = $$('#rTelefono').val();
    Genero = $$('#SelectorGenero').val();
    Fecha = $$('#rfecha').val();
    Cuidad = $$('#rCuidad').val();
    Direccion = $$('#rDireccion').val();
    Rol = $$('#SelectorRol').val();

    // Contruccion de archivo json

    var datosUsu ={
      nombre: Nombres,
      Telefono: Telefono,
      Genero: Genero,
      Fecha: Fecha,
      Cuidad: Cuidad,
      Direccion: Direccion,
      Rol: Rol  
    }
     console.log(datosUsu)

  // PROMESA
          
   /* db.collection("cities").doc("LA").set({
          name: "Los Angeles",
          state: "CA",
          country: "USA"
      })
      .then(() => {
          console.log("Document successfully written!");
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
      });
      */
      db.collection("colUsuarios").doc(Identificador).set(datosUsu)
      .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });


  }
