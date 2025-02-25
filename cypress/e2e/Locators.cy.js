describe('Locators', () => {
    
    it('Testing Google UI', () => {
      
        cy.visit('https://www.google.com')  //Get on the Google UI 
        cy.get("[class='gLFyf']").type("IPHONE 16 PRO") 
        cy.get("input[jsaction='trigger.kWlxhc']").click()
    
    })
})


