$$(document).on('page:init', '.page[data-name="panel-vendedor"]', function (e) { 
    fncargatablaproductos();
  })

  function fncargatablaproductos(){
    var card1= "";
    
    db=firebase.firestore()
    db.collection("colProductos")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            card1 += `
            <tr>
              <td class="label-cell">${doc.data().NombreProducto}</td>
              <td class="label-cell">${doc.data().DescripcionProducto}</td>
              <td class="numeric-cell">${doc.data().Precio}</td>
              <td class="numeric-cell">4</td>    
            </tr>
            ...
            
        `
        });

        $$("#tabla-productos").html(card1)
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

  }

