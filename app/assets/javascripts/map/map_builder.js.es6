class MapBuilder {
  constructor(mapEl, lat, lng, zoom = 13) {
    this.map = L.map(mapEl)

    L.Icon.Default.imagePath = '/assets'

    this.markers = []

    var osmLayer = new L.TileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 1,
        maxZoom: 13,
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
      }
    )

    this.setView(lat, lng, zoom)
    this.map.addLayer(osmLayer)
  }

  setView(lat = 0, lng = 0, zoom = 13) {
    this.map.setView(new L.LatLng(lat, lng), zoom)
  }

  addMarker(suggestion) {
    var marker = L.marker(suggestion.latlng, { opacity: .4 })

    marker.addTo(this.map)
    this.markers.push(marker)
  }

  removeMarker(marker) {
    this.map.removeLayer(marker)
  }

  removeMarkers() {
    this.markers.forEach(this.removeMarker, this)
    this.markers = []
  }

  findBestZoom() {
    var featureGroup = L.featureGroup(this.markers)

    this.map.fitBounds(featureGroup.getBounds().pad(0.5), { animate: false })
  }
}
