import React from 'react'

const Newsitem = ({titel,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3" style={{maxWidth:"345px"}}>
  <img src={src} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{titel}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
</div>
  )
}

export default Newsitem