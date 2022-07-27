
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
    Rol = $$('#selectorRol').val();

   

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
          
     console.log(Identificador);
     db = firebase.firestore();

     db.collection("colUsuarios").doc(Identificador).set(datosUsu)
     .then(() => {
       console.log("Document successfully written!");

   })
   .catch((error) => {
       console.error("Error writing document: ", error);
   });
     //Declarar si o si la variable db para poder inicializar la grabacion de los datos en la db
  
 //obtener un documento 
      db = firebase.firestore()
      db.collection("colUsuarios").doc(email).get() // SE SEÑALA O APUNTA AL DOCUMENTO CON SU IDENTIFICADOR
      .then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            Rol = doc.data().Rol
            if(Rol == "Comprador"){
              console.log("es comprador");
              
              mainView.router.navigate('/panel-comprador/')

            }else{
              mainView.router.navigate('/regtienda/')
            }       
            } 
            else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      });

  }
