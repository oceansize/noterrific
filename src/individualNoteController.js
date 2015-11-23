(function(){
  angular.module("noterrific").controller("individualNoteController", ["$routeParams", "notesFactory", "$location", function($routeParams, Notes, $location){
    var self = this;
    var noteId = $routeParams.noteId;

    self.note = Notes.find(noteId)
    if(!self.note) {
      self.note = Notes.create();
      $location.path("/notes/" + self.note.id); 
    }
  }])
})()

