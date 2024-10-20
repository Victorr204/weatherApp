import React from 'react'
import Weather from './components/Weather'

const App = () => {
  return (
    <div className='min-h-screen grid bg-pink-300 bg-opacity-50 md:w-screen sm:max-w-screen-sm sm:justify-center sm:items-center sm:h-3/4 sm:bg-pink-600 sm:bg-opacity-50 '>
      <Weather/>
    </div>
  )
}

export default App
