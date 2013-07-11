App.UsersApp = function () {
  var
    UsersApp = {},
    Layout = Backbone.Marionette.Layout.extend({
      className: "container-fluid",
      template: "#users-template"
    });
  UsersApp.initializeLayout = function () {
    App.content.show(new Layout());
  };

  return UsersApp;
}();
