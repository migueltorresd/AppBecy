$$(document).on('page:init', '.page[data-name="regproducto"]', function (e) { 
    $$('#btnVender').on('click',fnRegistroproducto);
  })

  function fnRegistroproducto(){

    console.log("funcion de registro de producto funciona");
    //recuperacion de datos del registro

    NombreProducto = $$('#rNombreproducto').val();    
    Precio = $$('#rPrecio').val(); 
    Categoriaproducto = $$('#selectorCategoriaProducto').val(); 
    ImagenesProducto = $$('#rImagenesProducto').val();
    DescripcionProducto = $$('#rDescripcionProducto').val();
   

    // Contruccion de archivo json
    var datosProducto ={
        NombreProducto: NombreProducto,
        Precio: Precio,
        CategoriaProducto: Categoriaproducto,
        ImagenesProduct: ImagenesProducto,
        DescripcionProducto: DescripcionProducto,
        ImagenesTien: ImagenesTien,
        Nombretienda: Nombretienda
    }
    
    console.log(datosProducto)
   
    //Promesa
    Identificador = email;

    db = firebase.firestore();

    //db.collection("colProductos").doc(Identificador).set(datosProducto)
    db.collection("colProductos").add(datosProducto)
    
    .then(() => {
     console.log("Producto creado");

      mainView.router.navigate('/panel-vendedor/');

    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  }