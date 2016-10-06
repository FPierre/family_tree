class PlaceInitializer {
  constructor(vueEl) {
    this.vueEl = vueEl
    this.initVue()
  }

  initVue() {
    this.vue = new Vue({
      el: this.vueEl,
      components: {

      },
      created() {
        console.log('created')
      }
    })
  }
}
