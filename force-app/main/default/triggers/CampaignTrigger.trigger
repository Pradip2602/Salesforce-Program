trigger CampaignTrigger on Campaign (before insert) {

    For(Campaign campaignRecord:Trigger.new){
        if(String.isBlank(campaignRecord.Status)){
          campaignRecord.Status='Aborted' ;
        }
        if(String.isBlank(campaignRecord.Type)){
        campaignRecord.addError(' type should not be Blank') ;
    }   
   }
}