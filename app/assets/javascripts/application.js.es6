//= require jquery2
//= require jquery_ujs
//= require tether
// require bootstrap
//= require turbolinks
//= require vue
//= require leaflet
///
//= require_directory ./Place
//= require_directory ./Map
//
//= require_tree .

$(document).on('turbolinks:load', () => {
  window.ft = window.ft || {}
  ft.PlaceInitializer = new PlaceInitializer('#places')
  ft.MapBuilder = new MapBuilder()
})
