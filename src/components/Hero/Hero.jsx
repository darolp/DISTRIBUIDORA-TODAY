import React from 'react'

function Hero({ children }) {
  return (
    <>
      <section className='heroContainer'>
        <div className='heroContent'>
          {children}
        </div>
      </section>
    </>
  )
}

export default Hero