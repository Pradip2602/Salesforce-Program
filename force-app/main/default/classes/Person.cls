public class Person {
 // Instance Data Member - It's there for each and every instance / object
	//private Integer noOfPeople;
	
    // Class Variable - Memory get allocated to this variable only per class and not per object / instance
    private static Integer noOfPeople = 0;
    
    public Person(){
        noOfPeople++;
    }
    public static Integer getPopulation(){
        return noOfPeople;
    }
}