//= require jquery2
//= require jquery_ujs
//= require tether
// require bootstrap
//= require turbolinks
//= require leaflet
//= require vue
//= require leaflet
///
//= require_directory ./Place
//= require_directory ./Map
//
//= require_tree .

$(document).on('turbolinks:load', () => {
  window.ft = window.ft || {}

  ft.placeInitializer = new PlaceInitializer('#places')
  ft.mapBuilder = new MapBuilder('map', 0, 0, 13)
  ft.mapUpdater = new MapUpdater(ft.mapBuilder)

  var placesAutocomplete = places({
    container: document.querySelector('#address-input')
  })

  placesAutocomplete.on('suggestions',   ft.mapUpdater.handleOnSuggestions)
  placesAutocomplete.on('cursorchanged', ft.mapUpdater.handleOnCursorchanged)
  placesAutocomplete.on('change',        ft.mapUpdater.handleOnChange)
  placesAutocomplete.on('clear',         ft.mapUpdater.handleOnClear)
})
