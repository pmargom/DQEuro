
angular.module("dqeuro", ["ngRoute", "angular-loading-bar"]);

angular.module("dqeuro").config(function() {
   
   /*
   BackendProvider.setApiKey(Properties.apiKey);
   BackendProvider.setCorsRequests();
   BackendProvider.setBackendUrl(Properties.backendUrl);
   BackendProvider.setBackendImagesUrl(Properties.backendImagesUrl);
   BackendProvider.setPersistedBackendUrl(Properties.persistedBackendUrl);
   */
   
});

angular.module("dqeuro").config(function(cfpLoadingBarProvider) {
   
   cfpLoadingBarProvider.includeSpinner = false;
   
});

angular.module("dqeuro").config(function($routeProvider) {
   
   $routeProvider.when("/inicio", {
      controller: "InicioCtrl",
      templateUrl: "views/Home.html"
   });

   $routeProvider.when("/nosotros", {
      controller: "NosotrosCtrl",
      templateUrl: "views/AboutUs.html"
   });

   $routeProvider.when("/mantenimiento", {
      controller: "MantenimientoCtrl",
      templateUrl: "views/mantenimiento.html"
   });

   $routeProvider.when("/legionella", {
      controller: "LegionellaCtrl",
      templateUrl: "views/Legionella.html"
   });

   $routeProvider.when("/aguas", {
      controller: "AguasCtrl",
      templateUrl: "views/Aguas.html"
   });

   $routeProvider.when("/osmosis-y-desaladoras", {
      controller: "OsmosisCtrl",
      templateUrl: "views/Osmosis.html"
   });

   $routeProvider.when("/descalsificadores", {
      controller: "DescalsificadoresCtrl",
      templateUrl: "views/Descalsificadores.html"
   });

   $routeProvider.when("/productos", {
      controller: "ProductosCtrl",
      templateUrl: "views/Products.html"
   });

   $routeProvider.when("/contacto", {
      controller: "ContactoCtrl",
      templateUrl: "views/Contact.html"
   });

   $routeProvider.when("/aviso-legal", {
      controller: "AvisoLegalCtrl",
      templateUrl: "views/AvisoLegal.html"
   });
   
   // facebook route.
   $routeProvider.otherwise({
      redirectTo: "/inicio"
   });
   
});