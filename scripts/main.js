let root = new Vue({
  el: '#root', /*the element to bind this to*/
  data: {
    // When a Vue instance is created, it adds all the properties found in its data object to Vue’s reactivity system
    placeHolderString: '',
    placeHolderInteger: 0,
    placeHolderBoolean: false,
    placeHolderArray: [],
    placeHolderObj: {},
    placeHolderErrorRes: null
  },

//  //Instance Lifecycle Hooks
  /*  Don’t use arrow functions on an options property or callback such as created: () => console.log(this.a) 
      Since arrow functions are bound to the parent context, this will not be the */

  beforeCreate() {    /*  Init and Injections & Reactivity  */

  },

  created() {    /*  Init and Injections & Reactivity  */
    console.log('a is: ' + this.a);

  },

  beforeMount() { /* before create root.$el and replace "root.el" with it */

  },

  mounted() { /*  create root.$el and replace "root.el" with it   */

  },

  beforeUpdate() {  /*  When data changes but the virtual Dom hasn't re-rendered yet  */

  },

  updated() { /*   When data changes and the virtual Dom has re-rendered  */

  },

  beforeDestroy() { /*  Before Teardown watchers, child components and event listeners   */

  },

  destroyed() {/*  After Teardown watchers, child components and event listeners  */

  }

});

// $watch is an instance method
root.$watch('a', function (newValue, oldValue) {

}