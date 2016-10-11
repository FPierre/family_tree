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

  // window.ft.placeInitializer = new PlaceInitializer('#places')
  // window.ft.mapBuilder       = new MapBuilder('map', 0, 0, 13)
  // window.ft.mapUpdater       = new MapUpdater(window.ft.mapBuilder)
  window.ft.rightSidebar     = new RightSidebar()

  // const placesAutocomplete = places({
  //   container: document.querySelector('#address-input')
  // })

  // placesAutocomplete.on('suggestions',   (e) => window.ft.mapUpdater.handleOnSuggestions(e))
  // placesAutocomplete.on('cursorchanged', (e) => window.ft.mapUpdater.handleOnCursorchanged(e))
  // placesAutocomplete.on('change',        (e) => window.ft.mapUpdater.handleOnChange(e))
  // placesAutocomplete.on('clear',         (e) => window.ft.mapUpdater.handleOnClear(e))
})
