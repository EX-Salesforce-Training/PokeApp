<aura:application extends="force:slds" controller="PokeController">
    <aura:attribute name="contents" type="string" default="" />
	<div id="potato">
        <lightning:layout>
            <lightning:button variant="Neutral" 
                               label="Packed" 
                               onclick="{!c.myAction}" 
                               class="slds-m-left_x-small">
            </lightning:button>
        </lightning:layout>
        {!v.contents}
    </div>
</aura:application>