(function(){
  angular.module("noterrific").controller("notesController", ["$routeParams", "notesFactory", "$location", function($routeParams, Notes, $location){
    var self = this;

    self.timestamp = function(note) {
      return Date.parse(note.updated_at);
    };
    self.notes = Notes.allNotes;
    self.newNote = function() {
      $location.path("/notes/new");
    };
    self.delete = function(note) {
      Notes.delete(note);
      if($routeParams.noteId == note.id.toString()) {
        $location.path("/notes/new");
      }
    };
  }])
  })()
