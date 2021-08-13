<aura:application >
    <aura:attribute name="pokeName" type="String" default='' />
    <aura:attribute name="pokeId" type="String" default='' />
    
    <aura:handler event="c:Set_Pokemon" action="{!c.setPokemonData}"/>
    
    <c:MenuBar />
    
    <aura:if isTrue="{! not(and(v.pokeName != '', v.pokeId != '')) }">
    	<c:Pokedex />
    </aura:if>
    
    <aura:if isTrue="{! and(v.pokeName != '', v.pokeId != '') }">
    	<c:PokemonInfo pokeName="{! v.pokeName }" pokeId="{! v.pokeId }" />
    </aura:if>
    
</aura:application>