import { api, LightningElement, wire } from "lwc";
import { createRecord, getRecord } from "lightning/uiRecordApi";

const fieldArray = ["Account.Name", "Account.Phone", "Account.Website"];
export default class AccountManagerLDS extends LightningElement {
    accountName;
    accountPhone;
    accountWebsite;

    accountNameChangeHandler(evt) {
        this.accountName = evt.target.value;
    }

    accountPhoneChangeHandler(evt) {
        this.accountPhone = evt.target.value;
    }

    accountWebsiteChangeHandler(evt) {
        this.accountWebsite = evt.target.value;
    }
    createAccount() {
        const fields = {
            Name: this.accountName,
            Phone: this.accountPhone,
            Website: this.accountWebsite
        };

        const recordInput = { apiName: "Account", fields };

        createRecord(recordInput)
            .then((response) => {
                console.log("Acount has been created: ", response.id);
                this.recordId = response.id;
            })
            .catch((error) => {
                console.error("Error in creating account: ", error.body.message);
            });
    }

    @api
    recordId;

    @wire(getRecord, { recordId: "$recordId", fields: fieldArray })
    accountRecord;

    get retAccountName() {
        if (this.accountRecord.data) {
            console.log("Name " + this.accountRecord.data.fields.Name.value);
            return this.accountRecord.data.fields.Name.value;
        }
    }
    get retAccountPhone() {
        if (this.accountRecord.data) {
            return this.accountRecord.data.fields.Phone.value;
        }
    }
    get retAccountWebsite() {
        if (this.accountRecord.data) {
            return this.accountRecord.data.fields.Website.value;
        }
    }
}
