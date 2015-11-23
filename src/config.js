(function() {
  angular.module("noterrific").config(["$routeProvider",
    function($routeProvider) {
      $routeProvider.when("/notes/:noteId", {
        templateUrl: "partials/note.html",
        controller: "individualNoteController",
        controllerAs: "noteCtrl"
      })
    }
  ]);
})()
