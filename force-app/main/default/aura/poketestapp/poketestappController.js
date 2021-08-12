({
	myAction : function(component, event, helper) {
		var action = component.get("c.sendCallout");
        action.setCallback(this, function(a){
            var state = a.getState();
            if(state == 'SUCCESS'){
                
            }
        });
        $A.enqueueAction(action);
	}
})