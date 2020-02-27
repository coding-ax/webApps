export default {
            template: `
            <div>
            <h1>
            {{message}}
            </h1>
            <p>你好</p>
            <button @click="btnClick">click</button>
            </div>
            `,
            data(){
                return {
                    message: 'hello vue',
                    count: 0
                }
            },
            methods: {
                btnClick() {
                    console.log('you have already click the button at' + this.count++);
                }
            },
            
}