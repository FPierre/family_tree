//= require jquery2
//= require jquery_ujs
//= require tether
// require bootstrap
//= require turbolinks
//= require leaflet
//= require vue
//= require leaflet
///
//= require_directory ./place
//= require_directory ./map
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

  placesAutocomplete.on('suggestions',   (e) => ft.mapUpdater.handleOnSuggestions(e))
  placesAutocomplete.on('cursorchanged', (e) => ft.mapUpdater.handleOnCursorchanged(e))
  placesAutocomplete.on('change',        (e) => ft.mapUpdater.handleOnChange(e))
  placesAutocomplete.on('clear',         (e) => ft.mapUpdater.handleOnClear(e))
})
