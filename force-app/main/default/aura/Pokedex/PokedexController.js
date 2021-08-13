({
    initializeData : function(component, event, helper) {
        helper.getPokemonPage(component);
    },
    next : function(component, event, helper) {
        component.set('v.pageNumber', component.get('v.pageNumber') + 1);
        helper.getPokemonPage(component);
    },
    prev : function(component, event, helper) {
    	const pageNumber = component.get('v.pageNumber');
    	if(pageNumber > 0) {
            component.set('v.pageNumber', component.get('v.pageNumber') - 1);
            helper.getPokemonPage(component);
		}
    },
    loadData: function(component, event, helper) {
        event.preventDefault();
        const [namePair, idPair] = event.target.id.split(';');
        const id = idPair.split('=')[1];
        const name = namePair.split('=')[1];
        
        const e = $A.get("e.c:Set_Pokemon");
        e.setParams({
            pokeName: name,
            pokeId: id
        });
        e.fire();
    },
    updatePokemonList: function(component, event, helper) {
        helper.updatePokemonListInMenu(component, event, helper);
    }
})