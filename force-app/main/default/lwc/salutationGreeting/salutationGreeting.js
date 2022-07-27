import { LightningElement } from 'lwc';

export default class RadioGroupBasic extends LightningElement {

    value1 = 'Mr.';
    value2 = 'Mrs.';

    onClickOne(evt) {
        this.value1 = evt.target.value1;
    }
    onClickTwo(evt) {
        this.value2 = evt.target.value2;
    }
}
