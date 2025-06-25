import React from 'react'
import './assets/scss/style.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import Homepage from './components/main_section/Homepage'

const App = () => {
  return (
    <div className='wrap'>
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App