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
      {  path: '/Regcompleto.html/',        url: 'Regcompleto.html',},
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


