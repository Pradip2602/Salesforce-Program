import { LightningElement, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountManager.getAccounts';

export default class AccountManagerApex extends LightningElement {

    get responseReceived() {
        if (this.accounts) {
            return true;
        }
        else {
            return false;
        }
    }

    // For wire service
    // @wire(getAllAccounts)
    // accounts;

    // For Imperative way
    accounts;
    noOfRecords;

    changeHandler(evt) {
        this.noOfRecords = evt.target.value;
    }

    getAccounts() {
        // Promise based Asynchronous call from client to server
        getAllAccounts({ noOfRecords: this.noOfRecords })
            .then(response => {
                this.accounts = response;
            }).catch(error => {
                console.error('Error in getting the acounts ', error.body.message);
            });
    }
}
