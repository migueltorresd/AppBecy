$$(document).on('page:init', '.page[data-name="index"]', function (e) {
  $$('#btnlogin').on('click', fnIngresa );
 
});

function fnIngresa() {

    email = $$('#lEmail').val();
    password = $$('#lPassword').val();
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
  
        $$('#lMensaje').html("Bienvenido a mi App!!");
  
        console.log("Usuario ingreso");
      //obtener un documento 
          db = firebase.firestore()
          db.collection("colUsuarios").doc(email).get() // SE SEÑALA O APUNTA AL DOCUMENTO CON SU IDENTIFICADOR
          .then((doc) => {
            if (doc.exists) {
                console.log("Document data:", doc.data());
                Rol = doc.data().Rol
                if(Rol== "Comprador"){
                  console.log("es comprador");
                  
                  mainView.router.navigate('/panel-comprador/')

                }else{
                  //setear las variables globales
                   Nombretienda = doc.data().Nombretienda;
                   ImagenesTien = doc.data().ImagenesTien;
                  mainView.router.navigate('/regproducto/')
                }       
                } 
                else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

        

        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
  
        console.error(errorCode + " -- " + errorMessage);
  
  
        switch(errorCode) {
            case "auth/wrong-password": mensaje="La clave es incorrecta";
                break
  
            case "auth/user-not-found": mensaje="Usuario no encontrado";
                break
  
            default: mensaje="Intente de nuevo";
  
        }
  
        $$('#rMensaje').html("Hubo un error: " + mensaje);
  
  
      });
  }
  
  