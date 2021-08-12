public class PokeController {

    public static String testString {get;set;}
    
    public PokeController(){
        //doCallout();
    }
    
    @AuraEnabled
    public static String getJsonString(String apiTarget){
        return APIExchange.makeJsonCallout(apiTarget);
    }

    @AuraEnabled
    public static void sendCallout(){
        doCallout();
    }
    
    @future(callout=true)
    public static void doCallout(){
        testString = APIExchange.makeJsonCallout('https://pokeapi.co/api/v2/pokedex/1/');
    }
    
}