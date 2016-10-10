class MapUpdater {
  constructor (mapBuilder) {
    this.mapBuilder = mapBuilder
  }

  handleOnSuggestions (event) {
    console.log(this)
    this.mapBuilder.removeMarkers()

    if (event.suggestions.length === 0) {
      this.mapBuilder.setView(0, 0, 1)

      return
    }

    event.suggestions.forEach(this.mapBuilder.addMarker, this.mapBuilder)
    this.mapBuilder.findBestZoom()
  }

  handleOnClear () {
    this.mapBuilder.setView(0, 0, 1)
    this.mapBuilder.removeMarkers()
  }

  handleOnChange (event) {
    this.mapBuilder.markers.forEach(function(marker, markerIndex) {
      if (markerIndex === event.suggestionIndex) {
        markers = [marker]
        marker.setOpacity(1)

        this.mapBuilder.findBestZoom()
      } else {
        this.mapBuilder.removeMarker(marker)
      }
    })
  }

  handleOnCursorchanged (event) {
    this.mapBuilder.markers.forEach(function(marker, markerIndex) {
      if (markerIndex === event.suggestionIndex) {
        marker.setOpacity(1)
        marker.setZIndexOffset(1000)
      } else {
        marker.setZIndexOffset(0)
        marker.setOpacity(0.5)
      }
    })
  }
}
