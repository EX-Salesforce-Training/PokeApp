public class PokeController {
	@AuraEnabled
    public static String getJsonString(String apiTarget){
        return APIExchange.makeJsonCallout(apiTarget);
    }
    
}