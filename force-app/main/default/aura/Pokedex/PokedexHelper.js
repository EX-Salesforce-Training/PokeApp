({
	getPokemonNames : function(component) {
		var action = component.get("c.getJsonString");
        var page = componenet.get("v.pageNumber");
        action.setParams({});
        action.setCallback(this, function(a){});
        $A.enqueueAction(action);
    }
})