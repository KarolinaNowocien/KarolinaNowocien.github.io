Vue.component('message', {
	template: '#newsletter-template',

	data: function(){
		return {message: ''};
	}

}),


new Vue({
  el: 'body',
  data: {
    message: ''
  },

	methods: {
  		handleIt: function() {
  			alert('Handled');
  		}
	}
});
