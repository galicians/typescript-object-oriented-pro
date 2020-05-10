//https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// Import stylesheets
import './style.css';
import {User} from "./User";




// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
let user = new User('Pablo')
//https://github.com/Microsoft/TypeScript/issues/11807
console.log(user)

