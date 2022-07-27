public class Covid19 {
public Integer recoveredInArea;
    public static Integer recoveredInCountry;
    
    // initialization block 1
    {
        System.debug('Initilization Block 1 is Called');
    }

    // initialization block 2
    {
        System.debug('Initilization Block 2 is Called');
    }

    // static initialization block 1
    static {
        System.debug('Static Initilization Block 1 is Called');
    }

    // static initialization block 2
    static {
        System.debug('Static Initilization Block 2 is Called');
    }

    // Blank Constructor
    public Covid19(){
        System.debug('Blank Constructor!');
        recoveredInArea = 0;
        recoveredInCountry = 0;
    }
    // Parameterized Constructor
    public Covid19(Integer recoveredData){
        // Calling Black Constructor
        this();
        System.debug('Parameterised Constructor!');
        recoveredInArea = recoveredData;
        recoveredInCountry = recoveredData;
    }
    
     public static void printTreated(){
        System.debug('Recovered in country : '+recoveredInCountry);
    }
}
// Execution
/*
Covid19 pune = new Covid19();
Covid19.printTreated();
System.debug('\n');
Covid19 hyderabad = new Covid19(10);
Covid19.printTreated();

*/