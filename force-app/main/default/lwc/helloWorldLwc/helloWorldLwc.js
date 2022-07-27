import { LightningElement } from 'lwc';


export default class HelloWorldLwc extends LightningElement {
    greeting = "World";

    changeHandler(evt) {
        this.greeting = evt.target.value;
    }
}