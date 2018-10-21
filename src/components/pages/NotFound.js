import React from 'react'

export default function NotFound() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1 
      className="display-4"><span className="text-danger">404</span> Page Not Found</h1>
      <p className="lead">Sorry, that page does not exist</p>
      <img 
        style={{maxWidth: '350px'}}
        src="https://i1.wp.com/godofindia.com/wp-content/uploads/2017/08/sorry-images-hd.jpg" alt="sorry smiley"/>
    </div>
  )
}
