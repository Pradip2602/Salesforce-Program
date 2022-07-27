({

    doInit: function (component, event, helper) {

        component.set("v.hotelRoomsInfo",

            [

                { roomName: 'A-101', roomCapacity: 4 },

                { roomName: 'A-102', roomCapacity: 2 },

                { roomName: 'A-103', roomCapacity: 1 },

                { roomName: 'B-101', roomCapacity: 6 },

                { roomName: 'B-102', roomCapacity: 2 },

                { roomName: 'C-101', roomCapacity: 4 },

                { roomName: 'C-102', roomCapacity: 3 }

            ])

    },

    handleTileClick: function (component, event, helper) {

        component.set('v.selectedHotelRoom', event.getParam('roomName'));

    }

})
