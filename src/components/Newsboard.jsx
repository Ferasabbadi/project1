import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem';

const Newsboard = () => {
    const[articales,setArticales]= useState([])
    useEffect(()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=> response.json()).then(data=> setArticales(data.articales));
        
    },[])
    console.log(setArticales)
  return (
   <>
   <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
   {articales.map((news,index)=>{
    return<Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>

   })}
   </>
  )
}

export default Newsboard