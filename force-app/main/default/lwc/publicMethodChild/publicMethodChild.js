import { api, LightningElement } from 'lwc';

export default class PublicMethodChild extends LightningElement {

    value = ['red'];

    options = [
        {label :'Red Marker' , value :'red'},
        {label :'Green Marker' , value :'green'},
        {label :'Blue Marker' , value :'blue'},
        {label :'Black Marker' , value :'black'}
        
    ]
      @api
    selectCheckBox(checkBoxValue){
        const selectedCheckBox 
        =this.options.find(checkbox=>{
            return checkbox.value === checkBoxValue ;
        });
        if (selectedCheckBox){
            this.value = selectedCheckBox.value ;
            return "Successfully Checked!" ;
        }
        return "No CheckBox Found!"
    }
}