//= require jquery2
//= require jquery_ujs
//= require tether
// require bootstrap
//= require turbolinks
//= require vue
//
//= require_directory ./Place
//
//= require_tree .

$(document).on('turbolinks:load', () => {
  window.ft = window.ft || {}
  ft.PlaceInitializer = new PlaceInitializer('#places')
})
