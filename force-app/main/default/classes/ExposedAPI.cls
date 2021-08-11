@RestResource(urlMapping='/getinfo/*')
global with sharing class ExposedAPI {
	@HttpGet
    global static String doGet(){
        String result = 'This is the Exposed API that you can consume, enjoy!';
        return result;
    }
}