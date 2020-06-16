// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))


export default async (req, res) => {
  
  // Process a POST request
  if (req.method === 'POST') {  

    console.log('Handling request to api "{origin}/api/postHandler"')
    console.log("Req 'send email' data: ", req.body )
    res.statusCode = 200
    res.json({ data_submitted: req.body})

  // Handle any other HTTP method
  } else {
    res.statusCode = 500
    res.json({ error: 'Request type not supported'})
  }
}
