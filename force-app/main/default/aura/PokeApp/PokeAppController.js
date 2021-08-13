({
	setPokemonData : function(component, event, helper) {
        component.set('v.pokeName', event.getParam('pokeName'));
        component.set('v.pokeId', event.getParam('pokeId'));
	}
})