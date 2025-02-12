describe("Get Request", ()=>{

 it("Testing Get Request from Reqres", ()=>{

       cy.request("GET","https://reqres.in/api/users/2")
         .its('status')
         .should("equal", 200);

     })

     it("PUT CALL", ()=>{

     cy.request( {

             method:"PUT" ,
             url :"https://reqres.in/api/users/2" ,
             body: 
             {
                    "name": "hasan" ,
                    "id"  :  2
             }

     } )
     .its('status')
     .should("equal", 200);

})

it("POST REQUEST", ()=>{

    cy.request( {

            method:"POST" ,
            url :"https://reqres.in/api/users" ,
            body: 
            {
                    name: "hUSEYIN",
                    id: "333"
            }

    } )
    .its('status')
    .should("equal", 201);
})
})