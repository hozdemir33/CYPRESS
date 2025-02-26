const {defineConfig} = require ("cypress");

module.exports =defineConfig ({
  
  e2e: {
    
    failOnStatusCode: true,   //Adding this comment here to make sure CI/CD ALSO FAILS 



    setupNodeEvents(on, config) {
       
      on("before:browser:launch", ()=>{
      console.log("Before running the tests....")
 
    })
      return config; 

    },
  },
});
