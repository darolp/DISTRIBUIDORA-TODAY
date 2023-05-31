import React from 'react'

function Hero({children}) {
  return (
    <>
      <div className='heroContent'>
        {children}
      </div>
    </>
  )
}

export default Hero