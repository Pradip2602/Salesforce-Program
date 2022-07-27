import { LightningElement } from 'lwc';
export default class LifecycleDemoParent extends LightningElement {
    show;
    constructor() {
        super(); // call to the base / super class ctor
        console.log("Parent's Constructor is called!");
        this.show = false;
    }
    handleChange(evt) {
        this.show = evt.detail.checked;
    }
    connectedCallback() {
        console.log("Parent Component's Connected Callback is called!");
    }
    renderedCallback() {

        console.log("Parent Component's rendered Callback is called!");
    }
    errorCallback(error, stack) {
        console.log('stack-parent ')
        console.log(stack)
        console.log('error-parent ')
        console.log(error)
        throwerror;
    }
    disconnectedCallback() {
        console.log("Parent Component's disconnected Callback is called!");
    }
}
