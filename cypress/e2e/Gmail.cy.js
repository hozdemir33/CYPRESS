describe("Gmail", ()=>{

    it("testing hamilton", ()=> {

     //cy.visit("https://www.yahoo.com/")

     //cy.visit("https://www.hamiltoncompany.com/")

     cy.visit("https://www.gmail.com")
     cy.get('[type="email"]').type("hozdemir8233@gmail.com")
     cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
     
     cy.get('[data-navigation="server"]').should("be.visible")



    })
})




