public class APIExchange {
    public static String makeJsonCallout(String apiAddress){
        Http http = new Http();
        httpRequest request = new HttpRequest();
        request.setEndpoint(apiAddress);
        request.setMethod('GET');
        request.setHeader('Content-Type', 'application/json');
        request.setHeader('Accept', 'application/json');
        HttpResponse response = http.send(request);
        
        if (response.getStatusCode() == 200){
            string respString = response.getBody();
            return respString;
        }
        return null;
    }

  
}