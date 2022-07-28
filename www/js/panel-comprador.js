$$(document).on('page:init', '.page[data-name="panel-comprador"]', function (e) { 
    fncargalistaproductos();
  })

  function fncargalistaproductos(){
    var card= "";
    
    db=firebase.firestore()
    db.collection("colProductos")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            card += `<div class="col-50">
                <div class="card demo-facebook-card">
                <div class="card-header">
                <div class="demo-facebook-avatar"><img src="${doc.data().ImagenesTien} width="100%"
                    width="34" height="34" /></div>
                <div class="demo-facebook-name" width="100%">${doc.data().NombreProducto}</div>
                <div class="demo-facebook-date" width="100%">${doc.data().Nombretienda}</div>
                </div>
                <div class="card-content card-content-padding">
                <p width="100%">${doc.data().DescripcionProducto} </p><img
                    src="${doc.data().ImagenesProduct}" width="100%" />
                    <p class="likes">Precio:${doc.data().Precio}</p>
                </div>
                <div class="card-footer"><button width="100%"><span>Comprar</span></button></div>
                </div>
                </div>
        `
        });

        $$("#lista-productos").html(card)
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

  }

