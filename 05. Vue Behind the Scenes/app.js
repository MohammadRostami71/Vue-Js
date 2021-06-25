const app = Vue.createApp({
    data() {
        return {
            currentUserInput: '',
            message: 'Vue is great!',
        };
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        setText() {
            // this.message = this.currentUserInput;
            this.message = this.$refs.userText.value;
        },
        beforeCreate() {
            console.log('beforeCreate()');
        },
        Created() {
            console.log('Created()');
        },
        beforeMount() {
            console.log('beforeMount()');
        },
        beforeUpdate() {
            console.log('beforeUpdate()');
        },
        Updated() {
            console.log('Updated()');
        },
        beforeUnmount() {
            console.log('beforeUnmount()');
        },
        unmounted() {
            console.log('unmounted()');
        },

    },
});

app.mount('#app');

setTimeout(function () {
    app.unmount();
},3000)

const app2=Vue.createApp({
    data() {
        return{
            favoriteMeal:'pizza'
        };
    },
    methods:{
    }
});

app2.mount('#app2');

// const data = {
//     message: 'Hello',
//     longMessage: 'Hello! World!'
// };
// const handler = {
//     set(target, key, value) {
//         console.log(target);
//         console.log(key);
//         console.log(value);
//         if (key === 'message') {
//             target.longMessage = value + 'world';
//         }
//         target.message = value;
//     }
// };
// const proxy = new Proxy(data, handler);
//
// proxy.message = 'Hello!!!';
// console.log(proxy.longMessage);
