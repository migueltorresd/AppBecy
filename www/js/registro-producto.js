$$(document).on('page:init', '.page[data-name="regproducto"]', function (e) { 
    $$('#btnVender').on('click',fnRegistroproducto);
  })

  function fnRegistroproducto(){

    console.log("funcion de registro de producto funciona");
    //recuperacion de datos del registro

    NombreProducto = $$('#rNombreproducto').val();    
    Precio = $$('#rPrecio').val(); 
    Categoria = $$('#selectorCategoriaProducto').val(); 
    ImagenesProducto = $$('#rImagenesProducto').val();
    DescripcionProducto = $$('#rrDescripcionProducto').val();
   

    // Contruccion de archivo json
    var datosProducto ={
        Nombretienda: NombreProducto,
        Precio: Precio,
        Categoria: Categoria,
        ImagenesTien: ImagenesProducto,
        DescripcionTien: DescripcionProducto
    }
    
    console.log(datosProducto)
   
    //Promesa
    Identificador = email;

    db = firebase.firestore();

    db.collection("colProductos").doc(Identificador).set(datosProducto)
    .then(() => {
     console.log("Producto creado");

      mainView.router.navigate('/panel-vendedor/');

    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  }