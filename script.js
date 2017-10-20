	new Vue({
			el: '#app',
			data: {
				items: [],
				item: '',
				title: 'Click to add',
			},
			computed: {
				empty() {
					if(!this.items.length) {
						return true
					}
				}
			},
			methods : {
				addItem() {
					if(!this.item) {
						alert('Pls Add Something!!');
					} else {
						this.items.push({task :this.item, done: false});
						this.item = '';
						localStorage.setItem("Memory",JSON.stringify(this.items));
					}
				},
				changeDone(e) {
					var index = e.target.dataset.no;
					this.items[index].done = !(this.items[index].done);
					localStorage.setItem("Memory",JSON.stringify(this.items));
					
				},
				delet(e) {
					var index = e.target.dataset.no;
					console.log(index);
					this.items.splice(index,1);
					localStorage.setItem("Memory",JSON.stringify(this.items));
				}
			},
			mounted: function() {
				this.items = JSON.parse(localStorage.getItem("Memory")) || [];
			} 
		});
