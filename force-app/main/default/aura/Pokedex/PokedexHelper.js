({

    getPokemonPage : function(component){
        let page = component.get("v.pageNumber");
        let targetLink = "https://pokeapi.co/api/v2/pokemon-species/?offset=" + (page * 20).toString() + "&limit=20";
        let action = component.get("c.getJsonString");
        action.setParams({"apiTarget" : targetLink});
        action.setCallback(this, function(result) {
            
            let state = result.getState();
            if(state == 'SUCCESS'){
                
				const parsedData = JSON.parse(result.getReturnValue()).results;
                const names = parsedData.map( function ({name}) {return name} );
                const ids = parsedData.map( function ({url}) {
                    const urlArr = url.split('/');
                    const id = urlArr[urlArr.length-2];
                    return id;});
                const urls = parsedData.map(function ({url}) { return url });
                
                const maps = [];
                
                for(let i = 0; i < parsedData.length; i++){
                    maps.push({
                        id: ids[i],
                        name: names[i],
                        url: urls[i]
                    });
                }
                
                component.set('v.listOfPokemon', maps);
                
                const appEvent = $A.get("e.c:Update_Pokemon_List");
                console.log(maps);
                appEvent.setParams({ pokeList: maps });
                appEvent.fire();
            }
        });
        $A.enqueueAction(action);
    },
    updatePokemonListInMenu: function(component, event, helper) {
        const appEvent = $A.get("e.c:Update_Pokemon_List");
        appEvent.setParams({ pokeList: component.get('v.listOfPokemon') });
        appEvent.fire();
    },
    getPokeData : function(component, id, name){
        let targetLink1 = "https://pokeapi.co/api/v2/pokemon-species/" + id + "/";
        let targetLink2 = "https://pokeapi.co/api/v2/pokemon/" + name + "/";

        let action = component.get("c.getPokeData");
        action.setParams({"apiTarget1": targetLink1, "apiTarget2": targetLink2});
        action.setCallback(this, function(result){
            let state = result.getState();
            if(state == 'SUCCESS'){
				const returns = JSON.parse(result.getReturnValue()).results;
                let finalResults = {
                    name : returns[0].name,
                    evolution_chain : returns[0].evolution_chain,
                    evolves_from_species : returns[0].evolves_from_species,
                    shape : returns[0].shape,
                    generation : returns[0].generation,
                    flavor_text_entries : returns[0].flavor_text_entries,
                    is_baby : returns[0].is_baby,
                    is_legendary : returns[0].is_legendary,
                    is_mythical : returns[0].is_mythical,
                    moves : returns[1].moves,
                    height : returns[1].height,
                    weight : returns[1].weight,
                    stats : returns[1].stats,
                    sprites : returns[1].sprites,
                    types : returns[1].types,
                    
                }
                //name
                //evolution chain
                //evolves from species
                //shape
                //generation
                //flavor text entries
                //is baby
                //is legendary
                //is mythical
                //moves
                //height
                //wieght
                //stats
                //sprites
                //types0
		        component.set('v.currentPokemonData', finalResults);
            }
        });
        $A.enqueueAction(action);
    }
    

    
})