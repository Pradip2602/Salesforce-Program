import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingIteration extends LightningElement {

   @track
   displayDiv = false;

   showDivHandler(evt) {

      this.displayDiv = evt.target.checked;

   }

   cityList = ['Jaipur', 'Bengaluru', 'Hyderabad', 'Mumbai']

}