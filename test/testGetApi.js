

const clientGetApi = require("../clientApi/clientGetApi")

//this function should be used with jest to test 
async function main (){
    try {
        const data = await clientGetApi()    
        console.log("Data adquired: ", data)
      } catch (error) {
        console.log("Error testing get api: ", error)
      }
}

// execute only if is directly run by node
if (require.main === module) {
    main();
}

module.exports = main