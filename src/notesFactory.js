(function(){
  angular.module("noterrific").factory("notesFactory", [function(){
    var notes = [
      {id: 1, title: "Directives in AngularJS", content: "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit.", tags: [], created_at: "29 October 2015", updated_at: "30 October 2015"},
      {id: 2, title: "Using curl", content: "Using cUrl is easy, just do it", tags: [], created_at: "29 October 2015", updated_at: "30 October 2015"},
      {id: 3, title: "Params Explained", content: "params are things that go in the url", tags: [], created_at: "29 October 2015", updated_at: "30 October 2015"},
      {id: 4, title: "Markdown for GitHub with an excessively long title because people lack the ability to be concise whilst using written communication", content: "Stop writing", tags: [], created_at: "29 October 2015", updated_at: "30 October 2015"},
      {id: 5, title: "Using HTTParty", content: "You party hard", tags: [], created_at: "29 October 2015", updated_at: "30 October 2015"},
      {id: 6, title: "Params Explained. Again.", content: "Surely you know how to do it", tags: [], created_at: "29 October 2015", updated_at: "30 October 2015"}
    ];

    var find = function(id) {
      return notes.filter(function(note) { 
        return note.id == id;
      })[0]
    };

    return {
      allNotes: notes,
      find: find
    };
  }])
})()
