describe("Assetions demo", () => {

    it("implicit assetions", () => {

     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
     //should and ---- implicit assetions
     cy.url().should('include', 'orangehrmlive.com')  //implicity assetions ---BUILD IN 
     .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     .should('contain','orangehrm')


     //should and ---- implicit assetions
     cy.url().should('include', 'orangehrmlive.com')  //implicity assetions ---BUILD IN 
     .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
     .and('contain','orangehrm')  

    })

})














//should and ---- implicit assetions
// cy.url().should('include', 'orangehrmlive.com')  //implicity assetions ---BUILD IN 
// cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// cy.url().should('contain','orangehrm')