describe("suit", ()=>{

    it("testing cypress website", ()=>{


        cy.visit("https://example.cypress.io/")

        //verify following items from the page ""apples , oranges , bananas ""


    })

    it("testing contain keywords", ()=>{

        cy.visit("https://example.cypress.io/commands/querying")

        //cy.get("//button[@class='btn btn-default']").trigger("mousedown")  This wont work 

        //verify following items from the page "apples , oranges , bananas ,more apples"
   
     cy.get(':nth-child(6) > :nth-child(2) > .well').contains("banana").should("have.class","third") 
       //Validating the items in the list

     cy.get(':nth-child(6) > :nth-child(2) > .well').contains('apples').should("have.class","first")

     cy.get(':nth-child(6) > :nth-child(2) > .well').contains('apples').should("have.visible","first")


    })

    it("testing cypress button", ()=>{


        cy.visit("https://example.cypress.io/commands/querying")

        cy.get('#query-btn').contains("Button").should("have.visible", "Button")

        cy.get('#query-btn').contains("Buttn").and("be.visible", "Button")//failed because contains does not have full info 'Button'
    
        cy.get('[data-cy="submit"]').click()

        cy.contains('Submit').click()



    })

    it("testing cypress Submit section", ()=>{


        cy.visit("https://example.cypress.io/commands/querying")
       
        cy.get('[data-cy="submit"]').click() //best practices 

        cy.contains('Submit').click() //best as well 

        cy.get('[data-cy="submit"]').should("have.visible", "Submit")


})

})