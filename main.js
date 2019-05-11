var app = new Vue({
  el: "#app",
  data: {
    message:
      "Hello Vue! Go into the web console and cite the app and the property you want to edit! Simple as that! Try app.message = 'Hello World!', easy as that!"
  }
});

var app2 = new Vue({
  el: "#app-2",
  data: {
    message: "You loaded this page on " + new Date().toLocaleString()
  }
});

var app3 = new Vue({
  el: "#app-3",
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
      {
        text:
          "Add new items to this list in the console by typing in app4.todos.push({ text: 'New item' })"
      }
    ]
  }
});

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js!"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
      // "this" in this line of code refers to this functions OWN property of "message", and grabs it for use on the following functions
    }
  }
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue! v-model makes whatever is placed in the input box and makes it the message property for this app! Whatever you type in this box will update the app state of message!"
  }
});
