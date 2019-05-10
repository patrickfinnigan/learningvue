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
      { text: "Build something awesome" }
    ]
  }
});
