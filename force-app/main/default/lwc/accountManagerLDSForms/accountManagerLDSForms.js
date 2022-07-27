import { LightningElement } from 'lwc';

export default class AccountManagerLDSForms extends LightningElement {

    recordId = '0015i000004r5diAAA'

    onSuccessHandler(evt){
        this.recordId = evt.target.detail.id ;
    }
}