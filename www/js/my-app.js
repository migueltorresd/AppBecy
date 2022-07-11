// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'Becy',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {  path: '/about/',                   url: 'about.html',},
      {  path: '/index.html/',              url: 'index.html',},
      {  path: '/Registro.html/',           url: 'Registro.html',},
      {  path: '/panel-usuario/',           url: 'panel-usuario.html',   },
            
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
  // Hacer algo aquí cuando la página con el atributo data-name="about" se carga e inicializa  
    $$('#bRegistro').on('click',fnRegistro )
})

$$(document).on('page:init', '.page[data-name="inicio-sesion"]', function (e) {
  $$('#bIngresa').on('click', fnIngresa );
})



function fnRegistro() {

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

