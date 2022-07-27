trigger ContactTrigger on Contact (before insert) {
    for(Contact contactRecord:Trigger.new){
        if(String.isBlank(contactRecord.OtherPhone)){
            contactRecord.OtherPhone='0000';
        }
        // validation for department field
        if(String.isBlank(contactRecord.Department)){
            contactRecord.addError('Department cannot be empty');
        }
    }
}