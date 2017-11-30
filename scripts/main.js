let anyVariableName = new Vue({
  el: '.app', // Binds itself to an element by query selector. can use #app or .app
  data: {
    message: 'Hello Vue'
  }
});
// <span v-bind:title="message">
// the v-bind ATTR is a directive any directive is prefixed with v-
// “keep this element’s title attribute up-to-date with the message property on the Vue instance.”
let app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
});

let app3 = new Vue({
  el: '#app-3',
  data: {
    // Typing app3.seen = false and the message disappears
    seen: true
  }
});

let app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JS' },
      { text: 'memes' },
      { text: 'idk other stuff 2' }
    ]
  }
});

let app5 = new Vue({
  el: '#app-5',
  data: {
    message: "Ayyy it's me mayrio"
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split('')
        .reverse()
        .join('');
    }
  }
});

let app6 = new Vue({
  // v-model="message" lets it get the message thats typed into the input>
  el: '#app-6',
  data: {
    message: 'Watdefuq Vue!'
  }
});
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'oh ok' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
});
