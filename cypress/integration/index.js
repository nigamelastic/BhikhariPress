describe('Sending ', function() {
    context('Running Before Class', function() {
        before(function() {
            cy.visit('https://www.wg-gesucht.de')
          });  
          it('checks the title', function() {
              cy.title().should('contain','WG Zimmer Wohnungen Wohnungssuche WG Suche WG Wohnung vermieten WG Nachmieter Zwischenmiete : WG-Gesucht.de')
            //cy.log("--------->"+cy.title);
            //expect(cy.title).to.equal("true")
          }) 
    });

    
   
});