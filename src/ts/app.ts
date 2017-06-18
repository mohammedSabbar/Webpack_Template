declare var require: any;
var style = require('./../sass/style.scss'); 		// this is main css file to bundle (try to include any sass file inside to make it one file as destination);
import { sayHi } from './otherClasses';


let dependency:any = new sayHi();
let h1:any = document.createElement('h1');
h1.innerHTML = dependency.sayHi('from Webpack pachage.');
document.body.appendChild(h1);