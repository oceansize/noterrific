(function(){
  angular.module("noterrific").controller("notesController", ["notesFactory", function(Notes){
    var self = this;

    self.notes = Notes.allNotes;
  }])
})()
