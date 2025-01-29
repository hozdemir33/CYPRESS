    describe("Facebook", () =>{

    it("this is testing of facebook user section", ()=>{

     cy.visit("www.facebook.com/")
     cy.get('[type="text"]').type("izde@gmail.com")
     cy.get("[id='pass']").type("abc12343")
     cy.get("[value='1']").click()
     cy.get("[class='_42ft _4jy0 signup_btn _4jy4 _4jy2 selected _51sy']").should("be.visible")

    
    

    })

})