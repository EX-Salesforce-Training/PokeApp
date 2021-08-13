public class PokeController {

    @AuraEnabled
    public static String testString {get;set;}
    
    public PokeController(){
        //doCallout();
    }
    
    @AuraEnabled
    public static List<String> getPokeData(String apiTarget1, String apiTarget2){
        String firstData = APIExchange.makeJsonCallout(apiTarget1);
        String secondData = APIExchange.makeJsonCallout(apiTarget2);
        List<String> finalData = new List<String>{firstData, secondData};
        return finalData;
    }
    
    @AuraEnabled
    public static String getJsonString(String apiTarget){
        return APIExchange.makeJsonCallout(apiTarget);
    }

    @AuraEnabled
    public static void sendCallout(){
		system.debug('it is being called');
        doCallout();
        system.debug('this is running a callout');
    }
    
    @AuraEnabled
    @future(callout=true)
    public static void doCallout(){
		system.debug('oh boy here I go calling out again');
        testString = APIExchange.makeJsonCallout('https://pokeapi.co/api/v2/pokedex/1/');
    }
    
}