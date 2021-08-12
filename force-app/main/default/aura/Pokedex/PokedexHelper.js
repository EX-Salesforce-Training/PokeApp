({

    getApiData : function(component, parser, targetLink){
		let action = component.get("c.getJsonString");
        action.setParams({"apiTarget" : targetLink });
        action.setCallback(this, function(a){
            let state = a.getState();
            if(state == 'SUCCESS'){
				parser(component, a.getReturnValue());
            }
        });
        $A.enqueueAction(action);        
    },
    
    getPokemonPage : function(component) {
        let page = component.get("v.pageNumber");
		let targetLink = "https://pokeapi.co/api/v2/pokemon-species/?offset=" + (page * 20).toString() + "&limit=20";
		getApiData(component, parsePokemonList, targetLink);
    },

    getPokeData : function(component, id){
        let page = component.get("v.pageNumber");
        let targetLink = "https://pokeapi.co/api/v2/pokemon-species/" + id + "/";
		getApiData(component, parsePokemonData, targetLink);
    },

    parsePokemonData : function(component, pokedata) {
        let jsonPokeData = JSON.parse(pokedata);
        let results = jsonPokeData.results;
        // build a profile for the pokemon
    },
    
    parsePokemonList : function(component, pokelist) {
    	//var pokelist = component.get('v.listOfPokemon');
        let jsonPokeList = JSON.parse(pokelist);
        let results = jsonPokeList.results;
		let finalResults = results.map(function (item, index){
            let tempMap = {};
            tempMap.name = item.name;
			let urlBits = item.url.split('/');
            tempMap.index = urlBits[urlBits.length-2];
            return tempMap;
        });

        component.set('v.listOfPokemon', finalResults);
        
    },
    

    
})