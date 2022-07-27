import { LightningElement } from "lwc";

import { NavigationMixin } from "lightning/navigation";

export default class DemoNavigation extends NavigationMixin(LightningElement) {
    openSalesforceSite() {
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",

            attributes: {
                url: "https://developer.salesforce.com"
            }
        });
    }

    openAccountHome() {
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",

            attributes: {
                objectApiName: "Account",

                actionName: "home"
            }
        });
    }

    createNewContact() {
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",

            attributes: {
                objectApiName: "Contact",

                actionName: "new"
            }
        });
    }

    openOppListView() {
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",

            attributes: {
                objectApiName: "Opportunity",

                actionName: "list"
            }
        });
    }

    openCaseRecord() {
        this[NavigationMixin.Navigate]({
            type: "standard__recordPage",

            attributes: {
                recordId: "0035i000004MiCMAA0",

                objectApiName: "Case",

                actionName: "view"
            }
        });
    }

    openAccontContactRelatedList() {
        this[NavigationMixin.Navigate]({
            type: "standard__recordRelationshipPage",

            attributes: {
                recordId: "0015i000005BikWAAS",

                objectApiName: "Account",

                relationshipApiName: "Contacts",

                actionName: "view"
            }
        });
    }

    openLWCComp() {
        this[NavigationMixin.Navigate]({
            type: "standard__component",

            attributes: {
                componentName: "c__WrapperAuraComp"
            }
        });
    }
}
