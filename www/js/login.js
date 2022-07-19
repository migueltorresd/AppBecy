function fnIngresa() {

    email = $$('#lEmail').val();
    password = $$('#lPassword').val();
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
  
        $$('#lMensaje').html("Bienvenido a mi App!!");
  
        console.log("Usuario ingreso");
  
        mainView.router.navigate('/panel-usuario/');
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
  