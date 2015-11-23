(function(){
  angular.module("noterrific").controller("notesController", ["notesFactory", "$location", function(Notes, $location){
    var self = this;

    self.notes = Notes.allNotes;
    self.newNote = function() {
      $location.path("/notes/new");
    };
  }])
})()
