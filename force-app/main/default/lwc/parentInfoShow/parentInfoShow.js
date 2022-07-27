import { api, LightningElement } from 'lwc';

export default class ParentInfoShow extends LightningElement {

    @api
    firstName='';
    lastName='';

    @api
    showName = false;
    
}