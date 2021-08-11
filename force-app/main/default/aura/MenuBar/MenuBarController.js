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
	}
})