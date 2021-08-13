@RestResource(urlMapping='/getinfo/*')
global with sharing class ExposedAPI {
	@HttpGet
    global static String doGet(){
        RestRequest req = RestContext.request;
        RestResponse res = RestContext.response;
        String result = '{"count": 1, "results": {"description": "hello I am oak, some people call me the pokemon prof. this world is inhabited by creatures we call pokemon some use them for fights, others keep them as pets, myself... I study pokemon as a profession."}';
        return result;
    }
}