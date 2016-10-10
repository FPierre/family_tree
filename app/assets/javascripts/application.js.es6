//= require jquery2
//= require jquery_ujs
//= require tether
// require bootstrap
//= require turbolinks
//= require leaflet
//= require vue
//
//= require_directory ./Place
//
//= require_tree .

$(document).on('turbolinks:load', () => {
  var placesAutocomplete = places({
    container: document.querySelector('#address-input')
  })

  window.ft = window.ft || {}
  ft.PlaceInitializer = new PlaceInitializer('#places')
})
