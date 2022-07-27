import { api, LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubsub';

export default class HotelRoom extends LightningElement {
    @api
    hotelRoomInfo = { roomName: 'A-01', roomCapacity: 4 };

    @api
    showRoomInfo = false;

    @wire(CurrentPageReference)
    pageReference;

    tileClickHandler() {
        console.log('tileClickHandler!');


        const tileClickedEvent = new CustomEvent(
            'tileclick',
            {

                detail: this.hotelRoomInfo,
                bubbles: true
            });


        this.dispatchEvent(tileClickedEvent);

        fireEvent(this.pageReference, 'pubsubtileclick', this.hotelRoomInfo);
    }
}