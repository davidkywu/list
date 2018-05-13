// what is a framework?
// a framwork is a prebuilt system or structure that has underlying rules on how to use it correctly.

// what is a MVC Framework?
// MVC stands for Model View Controller
// the model is the data. usually when we are talking about data, we are talking
// about data from a server.Common databases include: mySQL mongoDB.

// what is the View
// the view is the client. the client is the browser. the view is what you see on browser.
// most of the time MVC fromeworks make it really easy to interact between the model and view
			
// what is controller?
// the process and the logic behind making requests betweent the model and the view.

// TL:DR; Model is the database, the view is the browser/app, the controller is the logic in between.


// VUE JS LOGIC

// create a new Vue instance. Which basically means we're creating a new piece of Vue logic 
// to use with the HTML element that we want to target

// Create a new instance of the Vue constructor that is in the vue.js file.

var todo = new Vue({
	el: '#todo',
	data: {
		newItem:"",
		todoList:[]
	},
	methods: {
		addItem: function(){
			var item = this.newItem;
			this.todoList.push(item);
			this.newItem = "";
		},
		removeItem: function(item){
			var index = this.todoList.indexOf(item);
			this.todoList.splice(index, 1);
		}
	}
})


// event data example
document.getElementById('exampleID').addEventListener("click", eventData);

function eventData(e){
	console.log(e);
}