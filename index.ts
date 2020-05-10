//https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// Import stylesheets
import './style.css';
import { User } from './User';
import { SubscriptionType } from './enums/SubscriptionType.enum';




// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
let user = new User('Pablo')

console.log(user)

