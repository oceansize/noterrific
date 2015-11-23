(function(){
  angular.module("noterrific").controller("individualNoteController", ["$routeParams", "notesFactory", function($routeParams, Notes){
    var self = this;

    self.noteId = $routeParams.noteId;
    self.note = Notes.find(self.noteId);
  }])
})()

