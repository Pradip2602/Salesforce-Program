trigger LeadTrigger2 on Lead (before insert, before update) {

        for(Lead leadRecord : Trigger.new){

            if(String.isBlank(leadRecord.Rating)){

            leadRecord.Rating = 'Warm';

        }

    }

        System.debug('Lead trigger 2 is executing');
    }