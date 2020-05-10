//https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

// Import stylesheets
import './style.css';
import { User } from './classes/User.class';
import { SubscriptionType } from './enums/SubscriptionType.enum';


const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
let user = new User('Pablo');
user.email = 'test@gmail.com';
user.membership = { type: SubscriptionType.FREETRIAL, startDate: new Date()}

console.log('SubscriptionType',SubscriptionType.ANNUAL)
console.log(user)

