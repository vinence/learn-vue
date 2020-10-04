import Vue from 'vue';
const eventBus = new Vue({
    methods: {
        emit(event, ...args) {
            console.log('emit',event, ...args);
            this.$emit(event, ...args);
        },
        on(event, callback) {
            console.log('on',event, callback);
            this.$on(event, callback);
        },
        off(event, callback) {
            console.log('off',event, callback);
            this.$off(event, callback);
        }
    }
});
export default eventBus
