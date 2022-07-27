import { LightningElement } from 'lwc';

import { NavigationMixin } from 'lightning/navigation';

export default class DemoGenerateUrl extends NavigationMixin(LightningElement) {

    recordPageUrl;

    connectedCallback() {

        console.log('connected callback!');

        this[NavigationMixin.GenerateUrl]({

            type: 'standard__recordPage',

            attributes: {

                recordId: '0015i000004r5dnAAA',

                actionName: 'view'

            }

        }).then(url => {

            console.log('url ' + url);

            this.recordPageUrl = url;

            console.log('recordPageUrl ' + this.recordPageUrl);

        }).catch(err => {

            console.log(err);

        })

    }

   
    navigateToObjectHome() {

        this[NavigationMixin.Navigate]({

            type: 'standard__objectPage',

            attributes: {

                objectApiName: 'Account',

                actionName: 'home'

            }

        })

    }

}

