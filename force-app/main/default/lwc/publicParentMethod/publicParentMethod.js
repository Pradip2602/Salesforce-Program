import { api, LightningElement } from 'lwc';

export default class PublicParentMethod extends LightningElement {

    value = 'red';

    @api
    checkBoxChangeHandler(evt) {
        this.value = evt.target.value;
    }
    @api
    checkBoxSelectHandler() {
        const childComponent = this.template.querySelector('c-public-method-child');
        const returnedMessage =
            childComponent.selectCheckBox(this.value.toLowerCase());
        console.log('Returned Message:- ', returnedMessage)
    }
}