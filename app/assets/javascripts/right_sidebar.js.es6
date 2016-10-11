class RightSidebar {
  constructor() {
    this.initVue()
  }

  initVue() {
    const that = this

    this.vue = new Vue({
      el: '#right-sidebar',
      data () {
        return {
          hidden: false
        }
      },
      created () {
        console.log('RightSidebar created')
      },
      methods: {
        hide() {
          this.hidden = true
        }
      }
    })
  }
}
