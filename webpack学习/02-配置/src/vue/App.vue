<template>
    <div>
    <h1 class="title">
    {{message}}
    </h1>
    <p>你好</p>
    <button @click="btnClick">click</button>
    <Cpn />
    </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
    name:'App',
    data(){
        return {
            message: 'hello vue',
            count: 0
        }
    },
    methods: {
        btnClick() {
            console.log('you hava already click the button at' + this.count++);
        }
    },
    components:{
        Cpn,
    },
}
</script>

<style scoped>
.title{
        color: lightgreen;
      }
</style>