
describe ("Http Request2", () => {
    
    it("GET Call", () =>  {

        cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
        .its('status')
        .should('equal', 200);
    })

});  // Closing the describe block [double check this one please ]