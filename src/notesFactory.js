(function(){
  angular.module("noterrific").factory("notesFactory", ["localStorageService", function(LocalStorage){
    var notes = (LocalStorage.get("notes") || []);

    var find = function(id) {
      return notes.filter(function(note) { 
        return note.id == id;
      })[0]
    };

    var create = function() {
      var newId =  maxId() + 1;
      var timestamp = new Date;
      var note = {id: newId,
                  title: "Untitled Note" + newId,
                  content: "",
                  tags: [],
                  created_at: new Date,
                  updated_at: new Date};
      notes.push(note);
      LocalStorage.set("notes", notes)
      return note;
    }

    var maxId = function() {
      return notes.reduce(function(prev, curr){
        return Math.max(prev, curr.id);
      }, 0)
    }

    var update = function(note) {
      var index = notes.indexOf(note)
      notes[index].id = notes[index].id + 100;
      LocalStorage.set("notes", notes);
    };

    return {
      allNotes: notes,
      find: find,
      create: create,
      update: update
    };
  }])
})()
