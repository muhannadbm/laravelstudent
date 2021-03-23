/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('alert', require('./components/Alert.vue').default);
Vue.component('n-button', require('./components/Button.vue').default);
Vue.component('fg-input', require('./components/Inputs/formGroupInput.vue').default);
Vue.component('n-navbar', require('./components/Navbar/Navbar.vue').default);
Vue.component('slider', require('./components/CarouselSection').default);
Vue.component('n-navlink', require('./components/Navbar/NavLink').default);
Vue.component('drop-down', require('./components/Dropdown').default);
Vue.component('n-modal', require('./components/Modal').default);







/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

export  default new Vue({
    el: '#app',
    data:{
        search:'',
        enquiries:[],

    },
    created() {
        axios.get('./api/task')
            .then(response => this.enquiries = response.data);

    },
    computed:{
        filteredenq(){
            return this.enquiries.filter(enquiry =>{
                return enquiry.name.includes(this.search)
            })

        }
    },



});

new Vue({
    el: '#app2',
    data:{
        search:'',
        enquiries:[],

    },
    created() {
        axios.get('./api/task')
            .then(response => this.enquiries = response.data);

    },
    computed:{
        filteredenq(){
            return this.enquiries.filter(enquiry =>{
            return (enquiry.place + enquiry.typee+ enquiry.name).includes(this.search)

            })



        }
    },




});

new Vue({
    el: '#appadmin',
    data:{
        search:'',
        enquiries: [],

    },
    created() {
        axios.get('./api/univers')
            .then(response => this.enquiries = response.data);

    },
    computed:{
        filteredenq(){
            return this.enquiries.filter(enquiry =>{
                return (enquiry.place + enquiry.typee+ enquiry.name).includes(this.search)

            })



        }
    },




});
new Vue({
    el: '#appmessage',
    data:{
        searchmessage:'',
        enquiries: [],


    },
    created() {
        axios.get('./api/letter')
            .then(response => this.enquiries = response.data);

    },
    computed:{
        filteredenq(){
            return this.enquiries.filter(enquiry =>{
                return (enquiry.email + enquiry.msg+ enquiry.name).includes(this.searchmessage)

            })



        }
    },




});

new Vue({
    el: '#app3',

});

