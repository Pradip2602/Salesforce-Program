public with sharing class AccountManager {
   
    @AuraEnabled(cacheable=true)
    public static List<Account>getAccounts(Integer noOfRecords){
        return [SELECT Id, Name, Phone FROM Account LIMIT :noOfRecords];
    }
}
