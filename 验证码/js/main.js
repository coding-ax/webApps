new Vue({
    el: '#app',
    data: {
        userName: '',
        password: '',
        checkID: '',
        isRead:false
    },
    methods: {
        loginClick() {
            console.log(this.userName, this.password, this.isRead, this.checkID);
        }
    },
})