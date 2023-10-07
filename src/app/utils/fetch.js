"use client"
const axios = require('axios');

const Base_URL ='https://youtube-v31.p.rapidapi.com'
const options = {
    
    params: {
      
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': 'f271813574msh38ba3451fd917bap1fe18fjsn173959641e78',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

const GetData =async(url)=>{
    const res = await axios.get(`${Base_URL}/${url}`,options)
    const data =await res.data.items;
   // console.log(data)
    return data;
}

export default GetData