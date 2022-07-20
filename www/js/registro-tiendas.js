$$(document).on('page:init', '.page[data-name="regcompleto"]', function (e) { 
    $$('#btnVender').on('click',fnRegistrotienda)
  })
  
  function fnRegistrotienda(){

    console.log("funcion de registro funciona");
    //recuperacion de datos del registro

    Nombretienda = $$('#rNombretienda').val();
    Categoria = $$('#selectorCategoria').val(); 
    ImagenesTien = $$('#rImagenes').val();
    DescripcionTien = $$('#rDescripcion').val();
   

    // Contruccion de archivo json
    var datosTien ={
        Nombretienda: Nombretienda,
        Categoria: Categoria,
        ImagenesTien: ImagenesTien,
        DescripcionTien: DescripcionTien
    }
    
    console.log(datosTien)
   
    //Promesa
    Identificador = email;

    db = firebase.firestore();

    db.collection("colTiendas").doc(Identificador).set(datosTien)
    .then(() => {
    console.log("Document successfully written!");

    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

  }