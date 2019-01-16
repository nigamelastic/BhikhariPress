var username ="your username"
var password = "your password"
var city = "Wien"
var maxRent= "500"
var messageTemplate = "your custom message"
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
          it('logs in and searhes for houses',function(){

            cy.get('#headbar_wrapper > div.col-sm-8 > a:nth-child(2)').click();
            cy.get('#login_email_username').type(username)
            cy.get('#login_password').type(password)
            cy.get('#login_submit').click(); 
          })

          
          it('it searches for flats in your city',function(){
            cy.get('#autocompinp').type(city);
            //cy.get('#autocompinp').type("enter")
            //cy.get('#autocompinp').type()
            //cy.get('#rMax').type(maxRent);
            cy.get('#search_button').click()
          })

          it('it searches for prices range',function(){
            
            //cy.get('#autocompinp').type("enter")
            //cy.get('#autocompinp').type()
            cy.get('#rMax').type(maxRent);
            cy.get('#offer_filter_form > div:nth-child(9) > div.col-sm-12.col-md-4 > button.filter_submit_button.btn.btn-info.btn-md.hidden-xs').click();
            cy.get('h4 > a.detailansicht').each(($el, index, $list) =>{
              cy.wrap($el).click();
              cy.get('#rhs_column > div.panel.panel-rhs-default.rhs_contact_information.hidden-sm > div.panel-body > div > div:nth-child(15) > a').click();
              cy.get('#message_input').type(messageTemplate)
              cy.get('#messenger_form > div > div.hidden-xs > button.btn.btn-info.pull-right.create_new_conversation').click();
              cy.go('back');
            })
          })
    });

    
   
});