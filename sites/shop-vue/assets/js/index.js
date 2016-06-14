var alert = VueStrap.alert

new Vue({
  el:'#app',
  components:{
    modal:VueStrap.modal,
    accordion: VueStrap.accordion,
    panel: VueStrap.panel,
    carousel: VueStrap.carousel,
    slider: VueStrap.slider,
    dropdown: VueStrap.dropdown,
    sidebar: VueStrap.aside,
    popover: VueStrap.popover
  },
  data() {
      return {
        showLeft: false,
        showRight: false,
        showModal: true,
        fadeModal: true,
        zoomModal: true,
        showCustomModal: true,
        largeModal: true,
        smallModal: true
      }
    },

});

