({
    getApiData : function(component, parser, targetLink){
		let action = component.get("c.getJsonString");
        action.setParams({"apiTarget" : targetLink });
        action.setCallback(this, function(a){
            let state = a.getState();
            if(state == 'SUCCESS'){
				const parsedData = JSON.parse(a.getReturnValue()).results;
				
				// retrieve individual values
                const names = parsedData.map(({name}) => name);
                const ids = parsedData.map(({url}) => {
					const urlArr = url.split('/');
                    const id = urlArr[urlArr.length-2];
                    return id;
                });
				const urls = parsedData.map( ({url}) => url);
				
				// put those values into an array of objects
                const maps = [];
                for(let i = 0; i < parsedData.length; i++) {
                    maps.push({
                        id: ids[i],
                        name: names[i],
                        url: urls[i] 
                    });                    
                }
                             
                component.set('v.pokeData', maps);
            }
        });
        $A.enqueueAction(action);        
    },
    
    getPokemonPage : function(component) {
        let page = component.get("v.pageNumber");
		let targetLink = "https://pokeapi.co/api/v2/pokemon-species/?offset=" + (page * 20).toString() + "&limit=20";
		this.getApiData(component, this.parsePokemonList, targetLink);
    },

    getPokeData : function(component, id){
        let page = component.get("v.pageNumber");
        let targetLink = "https://pokeapi.co/api/v2/pokemon-species/" + id + "/";
		this.getApiData(component, this.parsePokemonData, targetLink);
    },

    parsePokemonData : function(component, pokedata) {
        return JSON.parse(pokedata).results;
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