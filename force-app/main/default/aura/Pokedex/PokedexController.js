({
	getPokemonNames : function(component, event, helper) {
        let id = 0;
        fetch('https://pokeapi.co/api/v2/pokedex/1/?limit=20&offset=' + id *20)
        .then((pokeData) => { 
            pokeData.map( ({pokemon_entries: [ { pokemon_species: { name } } ], entry_number}) => { 
                // name, entry_number
                component.set('v.pokeNames[' + entry_number % 20 + ']', name);
            })
        })
        .catch(console.error)
	}
})