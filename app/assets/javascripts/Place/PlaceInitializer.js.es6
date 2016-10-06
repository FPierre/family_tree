class PlaceInitializer {
  constructor(vueEl) {
    this.vueEl = vueEl
    this.initVue()
  }

  initVue() {
    this.vue = new Vue({
      el: this.vueEl,
      data: {},
      created() {
        console.log('created')
      }
    })
  }
}
