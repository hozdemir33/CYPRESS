   <reference types="Cypress" />

 describe("check UI Elements", () => {

        it("checking the radio button check tests", () => {
    
            cy.visit("https://testautomationpractice.blogspot.com/")
            
            cy.get('[id="male"]').should("be.visible") //visibiliry of the of the radio button assetions

            cy.get('[id="female"]').should("be.visible")//visibiliry of the of the radio button assetions
            
           
            //selecting radio buttons
            cy.get("[id='male'").check().should("be.checked")
        
            cy.get("[id='female'").should("not.be.checked")

    })


    it("Checking Check Boxes", () => {
    
        cy.visit("https://testautomationpractice.blogspot.com/")

        //Monday check box if it is visible or not

        cy.get("[id='monday']").should("be.visible") //Monday check boxed visible or not

        cy.get("[id='tuesday").should("be.exist")  //Tuesday check box is visiible or not


        //this is how you SELECT A CHECK BOX--- MONDAY RADIO BUTTON

        cy.get("[id='monday']").check().should("be.checked")   //seleting the check box

        cy.get("[id='monday']").uncheck().should("not.be.checked")   //unselecting the check box



        //SELECTING ALL THE CHECK BOXED 






    })

})