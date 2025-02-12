describe("Testing UI", ()=>{

    it("Testing", ()=>{

        cy.visit("https://example.cypress.io/")
          .contains("Commands")
         
    

        })

        it("Testing_1", ()=>{

            cy.visit("https://example.cypress.io/commands/querying")
            cy.contains("Button")
           
             

    
            })
          
        
        })
