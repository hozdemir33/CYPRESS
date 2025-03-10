describe("suit", ()=>{

    it("testing cypress website", ()=>{


        cy.visit("https://example.cypress.io/")

        //verify following items from the page ""apples , oranges , bananas ""


    })

    it("testing contain keywords", ()=>{


        cy.visit("https://example.cypress.io/commands/querying")

        //cy.get("//button[@class='btn btn-default']").trigger("mousedown")  This wont work 

        //verify following items from the page "apples , oranges , bananas ,more apples"
   
     // cy.get(':nth-child(6) > :nth-child(2) > .well').contains("banana").should("have.class","third") 
       //Validating the items in the list

     //cy.get(':nth-child(6) > :nth-child(2) > .well').contains('apples').should("have.class","first")

     cy.get(':nth-child(6) > :nth-child(2) > .well').contains('apples').should("have.visible","first")




    })
})