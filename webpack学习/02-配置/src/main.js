//1.common.js模块化规范
const { add, mul } = require('./js/mathUtil.js')
//2.es6的模块化
import { name, ID, age } from './js/info.js';

//3.引入CSS
import css from './css/normal.css';
console.log(name);
console.log(ID);
console.log(age);
console.log(add(10, 20));
console.log(mul(5, 8));