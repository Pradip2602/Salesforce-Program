import { LightningElement } from 'lwc';
export default class SimpleCalculator extends LightningElement {
    first_Number;
    second_Number;
    resultvalue;

    onChangeHandle(evt) {
        this.first_Number = parseInt(evt.target.value);
    }
    changeHandler(evt) {
        this.second_Number = parseInt(evt.target.value);
    }
    changeHandlerSquare(evt) {
        this.square = parseInt(evt.target.value);
    }
    add() {
        this.resultvalue = this.first_Number + this.second_Number;
    }
    substract() {
        this.resultvalue = this.first_Number - this.second_Number;
    }
    multiply() {
        this.resultvalue = this.first_Number * this.second_Number;
    }
    divide() {
        this.resultvalue = this.first_Number / this.second_Number;
    }

}
