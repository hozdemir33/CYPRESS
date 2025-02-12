describe("Testing UI", ()=>{

    it("Testing_1", ()=>{

        cy.visit("https://example.cypress.io/")
          .contains("Commands")
         
        })
           it("Testing_2", ()=>{

            cy.visit("https://example.cypress.io/commands/querying")
            cy.contains("Button")

            })

            it("Testing_3", ()=>{
                
                cy.visit("https://example.cypress.io/commands/querying")
                cy.get("[class='query-list']")
                .contains('apples')
    
                })
          

        
        })
