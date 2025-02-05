
describe ("Http Request2", () => {
    
    it("GET Call", () =>  {

        cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
        .its('status')
        .should('equal', 200);
    });

}); 

    it("POST Call", () =>  {

     cy.request({

        method : "POST",
        url : 'https://jsonplaceholder.typicode.com/posts',
        body :{

         id: 101,
         title: "testers"

        }

    }).then((response)=> {

        expect(response.status).to.eq(201);

        })
    
     })
    
        