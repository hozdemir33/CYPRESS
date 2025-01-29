describe('Testing', () => {
    
    it('Organge', () => {
      
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')  //first get on the website 
        
         cy.get("[name='username']").type("Admin") //then input username 
         
         cy.get("[type='password']").type("admin123") //then input password 
         
         cy.get("[type='submit']").click()  //then click 'sign in' button 

         cy.title().should('eq',"OrangeHRM")   //VERIFIY THE "OrangeHRM"

         //cy.get("[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").contains("Dashboard")  //Assetion to verfy it

         cy.get("[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']").contains("abc")

       //TIMETRAVEL option on the testing side to check the steps seperatly. cool feature!

       

    })


  })
