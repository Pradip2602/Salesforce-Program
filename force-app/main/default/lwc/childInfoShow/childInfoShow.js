import { LightningElement } from 'lwc';

export default class ChildInfoShow extends LightningElement {


    onChangeOne(evt){

        greeting = evt.target.value

    }
}