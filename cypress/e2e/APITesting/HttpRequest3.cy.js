describe ("HTTP REQUEST", ()=>{

it('GET',()=>{

      cy.request('GET', "https://jsonplaceholder.typicode.com/posts/1")

      .then((response)=>{
       expect(response.status).to.eq(200)

      })

})
it('POST Request', () => {
    cy.request({
      method: 'POST',  // ✅ Corrected placement
      url: 'https://jsonplaceholder.typicode.com/posts',  // ✅ Lowercase 'url' and removed extra '/'
      
      body: {  
        title: "My first post",  // ✅ Corrected structure
        body: "This is the content of my post",
        userId: 222  // ✅ 'userId' is correct for JSONPlaceholder
            }

    }).then((response) => {
      
      expect(response.status).to.eq(201);
  
    })
});

it("PUT REQUEST", () => {
    cy.request({
      method: 'PUT',  // ✅ Corrected method placement
      url: 'https://jsonplaceholder.typicode.com/posts/1',  // ✅ 'url' should be lowercase
      body: {
        title: "Updated Title",  // ✅ JSONPlaceholder requires 'title', not 'name'
        body: "Updated Content",  // ✅ Added correct property
        userId: 1  // ✅ Correct property (instead of 'id')
      }
    }).then((response) => {
      // ✅ Check if the response status is 200 (successful update)
      expect(response.status).to.eq(200);
  
      
    })
  })

});