({
    populateData : function(component, event, helper){
        const name = component.get('v.pokeName');
        const id = component.get('v.pokeId');
        helper.getPokeData(component, name, id);
    }
})