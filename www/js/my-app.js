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
      {  path: '/index/',                   url: 'index.html',},
      {  path: '/panel-usuario/',           url: 'panel-usuario.html',},
      {  path: '/regcompleto/',             url: 'regcompleto.html',},
      {  path: '/registro/',                url: 'registro.html',   },
      {  path: '/prueba/',                  url: 'prueba.html',   },      

      
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');

var db;
var colUsuarios;

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
  $$('#bIngresa').on('click',imprimir);
})



