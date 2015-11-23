(function(){
  angular.module("noterrific").factory("notesFactory", [function(){
    var notes = [];

    var find = function(id) {
      return notes.filter(function(note) { 
        return note.id == id;
      })[0]
    };

    var create = function() {
      var newId =  maxId() + 1;
      var timestamp = new Date;
      var note = {id: newId,
                  title: "Untitled Note",
                  content: "",
                  tags: [],
                  created_at: timestamp,
                  updated_at: timestamp};
      notes.push(note);
      return note;
    }

    var maxId = function() {
      return notes.reduce(function(prev, curr){
        return Math.max(prev, curr.id);
      }, 0)
    }

    var update = function(note) {
      var index = notes.indexOf(note);
      notes[index].updated_at = new Date;
    };

    return {
      allNotes: notes,
      find: find,
      create: create,
      update: update
    };
  }])
})()
