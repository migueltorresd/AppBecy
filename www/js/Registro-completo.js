function fnRegistrocompleto() {

    email = $$('#rEmail').val();
    password = $$('#rPassword').val();
  
  // PROMESA
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
  
        $$('#rMensaje').html("Bienvenido a mi App!!");
  
        console.log("Usuario creado");
  
        mainView.router.navigate('/panel-usuario/');
      
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
  
        console.error(errorCode + " -- " + errorMessage);
  
        switch(errorCode) {
            case "auth/email-already-in-use": mensaje="La direccion de mail ya está registrada";
                break
  
            case "auth/weak-password": mensaje="Clave muy debil. Escribe una más larga";
                break
  
            default: mensaje="Intente de nuevo";
  
        }
  
        $$('#rMensaje').html("Hubo un error: " + mensaje);
  
        // ..
      });
  
  }