describe('Locators', () => {
    
    it('passes', () => {
      
        cy.visit('https://www.google.com')
        cy.get("[class='gLFyf']").type("IPHONE 16 PRO")
        cy.get("input[jsaction='trigger.kWlxhc']").click()
    
    
    })
  })

