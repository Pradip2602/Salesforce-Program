import { createElement } from 'lwc';

import HotelRooms from 'c/hotelRooms';



describe('c-hotelRooms', () => {

    afterEach(() => {

        // The javascript dom instance is shared across test cases, in a single file, so reset that

        while (document.body.firstChild) {

            document.body.removeChild(document.body.firstChild);

        }

    })

    // test case

    it('Count no of hotel Room components and compare', () => {

        const hotelRooms = createElement('c-hotelRooms', { is: HotelRooms });

        document.body.appendChild(hotelRooms);

        const allHotelRoomComponents = hotelRooms.shadowRoot.querySelectorAll('c-hotel-room');

        expect(allHotelRoomComponents.length).toBe(7);

    })



    it('Check the title of the lightning card', () => {

        const hotelRooms = createElement('c-hotelRooms', { is: HotelRooms });

        document.body.appendChild(hotelRooms);

        const lightnincCardComp = hotelRooms.shadowRoot.querySelector('lightning-card');

        expect(lightnincCardComp.title).toEqual('Hotel Rooms!');

    })

})