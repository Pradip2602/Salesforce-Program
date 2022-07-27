import { LightningElement, wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import {registerListner , unregisterAllListners} from 'c/pubsub';

export default class SelectedHotelRoom extends LightningElement {

    SelectedHotelRoomInfo = {};

    @wire(CurrentPageReference)pageRef;

    connectedCallback(){
       
        registerListner('pubsubtileclick',this.hotelRoomSelectedHandler,this);
    }
    
    hotelRoomSelectedHandler(payload){

        this.SelectedHotelRoomInfo = payload ;

    }

    disconnectedCallback(){

        unregisterAllListners(this);
    }
}