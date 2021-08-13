({
	toggleItem : function(component, event, helper) {
        if(event.target.id === component.get('v.visibleItem')) {
            const visibleItem = component.get('v.visibleItem');
            component.set('v.visibleItem', '');
            
            const menu = component.find(visibleItem + '-menu');
            $A.util.removeClass(menu, 'is-visible');
            $A.util.addClass(menu, 'is-hidden');
        } else {
			component.set('v.visibleItem', event.target.id);
            
            const visibleItem = component.get('v.visibleItem');
            const menu = component.find(visibleItem + '-menu');
            $A.util.removeClass(menu, 'is-hidden');
            $A.util.addClass(menu, 'is-visible');
        }
	},
    back: function(component, event, helper) {
        const e = $A.get("e.c:Set_Pokemon");
        e.setParams({pokeId: '', pokeName: ''});
        e.fire();
    },
    setBackButton: function(component, event, helper) {
        const backButton = event.getParams('pokeId') !== '' && event.getParams('pokeName') !== '';
        if(backButton) {
            const backButtonElement = component.find('back-btn');
            const searchButtonElement = component.find('search-btn');
            const menu = component.find('search-menu');
            $A.util.removeClass(menu, 'is-visible');
            $A.util.addClass(searchButtonElement, 'icon-is-hidden');
            $A.util.removeClass(backButtonElement, 'icon-is-hidden');
            
        }
    },
    updatePokemonList: function(component, event, helper) {
        component.set('v.pokemonList', event.getParam('pokeList'));
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
    filter: function(component, event, helper) {
        event.preventDefault();

        const filterQuery = new FormData(event.target).get('filter');
        const reg = new RegExp(filterQuery);
        const pokemonList = component.get('v.pokemonList');
        console.log(pokemonList);
        const pokemonFilteredList = pokemonList.filter(function({name}) { 
            return reg.test(name)
        });
        component.set('v.pokemonFilteredList', pokemonFilteredList);
        
        const e = component.getEvent('updateList');
        e.fire();
    },
    noop: function(component, event, helper) {
        return;
    }
})