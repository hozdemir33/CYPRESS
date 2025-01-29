const {defineConfig} = require ("cypress");

module.exports =defineConfig ({
  
  e2e: {
    
    setupNodeEvents(on, config) {
       
      on("before:browser:launch", ()=>{
      console.log("Before running the tests....")
 
    })
      return config; 

    },
  },
});
