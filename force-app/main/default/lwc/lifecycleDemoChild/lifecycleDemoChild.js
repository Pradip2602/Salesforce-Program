import { LightningElement } from 'lwc';
export default class LifecycleDemoChild extends LightningElement {
    simpleText;
    constructor() {
        super(); // call to the base / super class ctor
        console.log("Child's Constructor is called!");
        this.simpleText = 'default';
    }
    changeHandler(evt) {
        this.simpleText = evt.target.value;
    }
    connectedCallback() {
        console.log("Child Component's Connected Callback is called!");
        thrownewError("Oops, Something went Wrong!");
    }
    renderedCallback() {
        console.log("Child Component's rendered Callback is called!");
    }
    disconnectedCallback() {
        // You can free/ release resources here
        console.log("Child Component's disconnected Callback is called!");
    }
}
