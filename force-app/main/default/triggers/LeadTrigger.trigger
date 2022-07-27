/*
trigger LeadTrigger on Lead (before insert) {

            for(Lead leadRecord : Trigger.new){

                if(String.isBlank(leadRecord.LeadSource)){

                    leadRecord.LeadSource = 'Other';
                }
             }

}       */

trigger LeadTrigger on Lead (before insert, before update) {

    //System.debug('Lead trigger called');

    for(Lead leadRecord : Trigger.new){

        if(String.isBlank(leadRecord.LeadSource)){

            leadRecord.LeadSource = 'Other';

        }

        // validation on industry field

        if(String.isBlank(leadRecord.Industry)){

            leadRecord.addError('The industry field cannot be blank');

        }

    }

    System.debug('Lead trigger 1 is executing');

}