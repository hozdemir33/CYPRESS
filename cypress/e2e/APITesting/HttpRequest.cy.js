describe ("Http Request", () =>{

    it("GET Call", ()=>  {

        cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
        .its('status')
        .should('equal', 200);

    })

    it("POST Call", ()=> {
           cy.request({
            method : 'Post',
            url : 'https://jsonplaceholder.typicode.com/posts/',
            body:   {
                    name: "my name is tuba",
                    id: 101 ,
                    userid:222
                    }  
            })

            .its('status')
            .should('equal', 201);
        
    });

    it("PUT CALL", ()=> {

         cy.request({
                 method: 'PUT',
                 url  : 'https://jsonplaceholder.typicode.com/posts/1' ,
                 body :{
                 name: "my name is tuba",
                    id: 1
                }

         } )

             .its('status')
             .should('equal', 200);

    })

       it('Delete Call', () =>
        
        {

        cy.request ({   

            method: "DELETE",
            url:    "https://jsonplaceholder.typicode.com/posts/1" ,
        
        })
                .its('status')
                .should('equal', 200);
        
        })
                
});



      