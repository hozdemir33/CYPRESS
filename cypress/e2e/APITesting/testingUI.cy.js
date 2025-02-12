describe("Testing UI", ()=>{

    it("Testing_1", ()=>{

        cy.visit("https://example.cypress.io/")
          .contains("Commands")
         
        })
           it("Testing_2", ()=>{

            cy.visit("https://example.cypress.io/commands/querying")
            cy.contains("Button")

            })

            it("Testing_3", ()=>{
                
                cy.visit("https://example.cypress.io/commands/querying")
                cy.get("[class='query-list']")
                .contains('apples')
    
                })

                it("Testing_4", ()=>{
                
                    cy.visit("https://example.cypress.io/commands/querying")
                    cy.get("[placeholder='Email']").type('fakeemails@email.com')
                    cy.get("[id='inputPassword']").type("1234566609820930iuiuhiuhiuhiuhiuh29u@")
                
            
        
                    })
                   
                    it ("HTTP GET REQUEST TESTING", ()=>{

                       cy.request({
                        url : "https://jsonplaceholder.typicode.com/posts"
                       }).then((response)   => {
                        expect(response.status).to.eq(200)

                       })

                    it("http get a single users", ()=>{
                        cy.request({
                            url :"https://jsonplaceholder.typicode.com/posts/1"
                        }).then((response, ()=>{
                          expect(response.status).to.eq(200)

                        }
                        
                        ))


                    })



                           
             })

            
            })

 

            



