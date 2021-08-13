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
    }
})