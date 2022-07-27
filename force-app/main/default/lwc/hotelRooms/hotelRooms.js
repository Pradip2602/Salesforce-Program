import { LightningElement } from 'lwc';

export default class HotelRooms extends LightningElement {
    selectedHotelRoom;
    hotelRoomsInfo;

    constructor() {
        super();

        this.selectedHotelRoom = 'default';

        this.hotelRoomsInfo = [
            { roomName: 'A-01', roomCapacity: 4 },
            { roomName: 'A-02', roomCapacity: 2 },
            { roomName: 'A-03', roomCapacity: 1 },
            { roomName: 'B-01', roomCapacity: 6 },
            { roomName: 'B-02', roomCapacity: 2 },
            { roomName: 'C-01', roomCapacity: 4 },
            { roomName: 'C-02', roomCapacity: 3 }
        ]

        // // Imperatively providing event listener for the 'tileclick' event
        // //1 Anonymous Event Listener
        // this.template.addEventListener('tileclick',function(evt){
        //     const hotelRoomInfoLocal = evt.detail;
        //     this.selectedHotelRoom = 'Room Name: '+hotelRoomInfoLocal.roomName;    
        // }.bind(this))

        // 2 Separate Event Listener
        //this.template.addEventListener('tileclick', this.tileSelectHandler.bind(this));

        // 3 Arrow Function
        // TODO
        this.template.addEventListener('tileclick',(evt)=> {
            const hotelRoomInfoLocal = evt.detail;
        this.selectedHotelRoom = 'Room Name: ' + hotelRoomInfoLocal.roomName +'Room Capacity: '+hotelRoomInfoLocal.roomCapacity;
        })
    }
    tileSelectHandler(evt) {
        const hotelRoomInfoLocal = evt.detail;
        this.selectedHotelRoom = 'Room Name: ' + hotelRoomInfoLocal.roomName;
    }
}