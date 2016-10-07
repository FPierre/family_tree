class MapBuilder {
  constructor (mapEl, lat, lng, zoom = 13) {
    this.map = L.map('map').setView([51.505, -0.09], 13)

    L.Icon.Default.imagePath = '/assets'
    
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map)

    L.marker([51.5, -0.09]).addTo(this.map)
                           .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                           .openPopup()
  }
}
