// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const axios = require('axios');


const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const GetData = async () => {
  
  console.debug("getting data from api... ")
  
  //emulate lagg:
  await sleep(2000)

  try {

    const response = await axios({
      method: 'GET',
      url:"https://randomuser.me/api"
    })

    console.debug("Post api response data: ", response.data)

    return response.data
  } catch (error) {
    return null
  }
}

module.exports = GetData