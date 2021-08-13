({
    getPokeData : function(component, id, name){
        let targetLink1 = "https://pokeapi.co/api/v2/pokemon-species/" + id + "/";
        let targetLink2 = "https://pokeapi.co/api/v2/pokemon/" + name + "/";
        
        let action = component.get("c.getPokeData");
        action.setParams({"apiTarget1": targetLink1, "apiTarget2": targetLink2});
        action.setCallback(this, function(result){
            let state = result.getState();
            if(state == 'SUCCESS'){
                const returns = result.getReturnValue()
                	.map(JSON.parse)
                const flavorTextEntries = returns[0].flavor_text_entries
                const filteredFlavorText = flavorTextEntries.filter(entry => entry.language.name === 'en');
                
                
                let finalResults = {
                    name : returns[0].name,
                    evolution_chain : returns[0].evolution_chain,
                    evolves_from_species : returns[0].evolves_from_species,
                    shape : returns[0].shape,
                    generation : returns[0].generation,
                    flavor_text_entries : filteredFlavorText,
                    is_baby : returns[0].is_baby,
                    is_legendary : returns[0].is_legendary,
                    is_mythical : returns[0].is_mythical,
                    moves : returns[1].moves,
                    height : returns[1].height,
                    weight : returns[1].weight,
                    stats : returns[1].stats,
                    sprites : returns[1].sprites,
                    types : returns[1].types
                }
                console.log(finalResults);
                component.set('v.currentPokemonData', finalResults);
            }
        });
        $A.enqueueAction(action);
    }
})