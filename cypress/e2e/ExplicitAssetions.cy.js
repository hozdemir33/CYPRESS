describe("ExplicityAssetions",  () => {

    it("This is expilicity assetions tests", () =>  {
 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
        //not build in methods thESE EXPLICITY ASSETSION, 'EXPECT'--BDD  AND 'ASSET'--TDD

        cy.get("[name='username']").type("Admin")
        cy.get("[type='password']").type("admin123")
        
        cy.get("[type='submit']").debug().click()

        //customazed assetions

        let expectedName="Admin Admin";
        cy.get("[class='oxd-userdropdown-name']").then( (x) => {

            let actName=x.text()       
            
            //BDD STYLE 
            expect(actName).to.equal(expectedName)   
           // expect(actName).to.not.equal(expectedName)

            //TDD STYLE 

            assert.equal(actName,expectedName)
            assert.notEqual(actName,expectedName)

        

        } )

    })

})