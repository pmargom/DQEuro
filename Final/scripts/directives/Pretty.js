angular.module("dqeuro").directive('prettyp', function(){
   return function(scope, element, attrs) {
      $("[data-rel^='prettyPhoto']").prettyPhoto({
         animationSpeed:'slow',
         theme:'facebook', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
         gallery_markup:'',
         slideshow:2000
      });
   }
})