//= require ./components/mapv

$(document).on('turbolinks:load', () => {
  new Vue({
    el: '#right-sidebar',
    data () {
      return {
        hidden: false
      }
    },
    components: {
      // HideArrow,
      Mapv: 'mapv'
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
})
