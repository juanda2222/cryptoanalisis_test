// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const DumbPromise = (arg1, arg2) => (new Promise( (resolutionFunc, rejectionFunc) => {
  setTimeout(() => {
    console.log("Dumb promise Args: ")
    console.log(arg1)
    console.log(arg2)
    resolutionFunc("Dumb Data")
  }, 1000);
}));

export const PostData = async (json_form_data) => {
  
  //wait some time to simulate lagg
  await sleep(2000)

  console.debug("Received data in ClientPostApi: ", json_form_data)
  try {
    const response = await axios({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      data: json_form_data,
      url:'/api/postHandler'
    })

    console.debug("Post api response data: ", response.data)

    return response.data
  } catch (error) {
    return null
  }
}