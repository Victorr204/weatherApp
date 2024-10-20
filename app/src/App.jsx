import React from 'react'
import Weather from './components/Weather'

const App = () => {
  return (
    <div className='app md:w-screen sm:grid sm:w-screen sm:justify-center sm:items-center  sm:bg-pink-400 md:bg-yellow-100 md:bg-opacity-50 sm:bg-opacity-50 '>
      <Weather/>
    </div>
  )
}

export default App
