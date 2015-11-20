(function(){
  angular.module("noterrific").controller("notesController", [function(){
    var self = this;

    self.notes = [
      {id: 1, title: "Directives in AngularJS", content: "", tags: [], created_at: "29 October 2015", updated_at: "30 October 2015"},
      {id: 2, title: "Using curl", content: "", tags: [], created_at: "29 October 2015", updated_at: "30 October 2015"},
      {id: 3, title: "Params Explained", content: "", tags: [], created_at: "29 October 2015", updated_at: "30 October 2015"},
      {id: 4, title: "Markdown for GitHub with an excessively long title because people lack the ability to be concise whilst using written communication", content: "", tags: [], created_at: "29 October 2015", updated_at: "30 October 2015"},
      {id: 5, title: "Using HTTParty", content: "", tags: [], created_at: "29 October 2015", updated_at: "30 October 2015"},
      {id: 6, title: "Params Explained. Again.", content: "", tags: [], created_at: "29 October 2015", updated_at: "30 October 2015"}
    ];
  }])
})()
