
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

   $routeProvider.when("/productos", {
      controller: "ProductosCtrl",
      templateUrl: "views/Products.html"
   });

   $routeProvider.when("/contacto", {
      controller: "ContactoCtrl",
      templateUrl: "views/Contact.html"
   });

   
   // default route.
   $routeProvider.otherwise({
      redirectTo: "/inicio"
   });
   
});