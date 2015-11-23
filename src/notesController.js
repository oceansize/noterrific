(function(){
  angular.module("noterrific").controller("notesController", ["notesFactory", "$location", "$scope", function(Notes, $location, $scope){
    var self = this;

    self.specialOrder = function(note) {
       return note.content.length;
    };
    self.notes = Notes.allNotes;
    self.newNote = function() {
      $location.path("/notes/new");
    };
  }])
})()
