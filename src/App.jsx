import React from 'react'
import Jobs from './components/JobDiv/jobs'
import Footer from './components/FooterDiv/Footer'
import Value from './components/ValueDiv/Value'
import Search from './components/SearchDiv/search'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return(
    <div className='w=[80%]m-auto bg-white'>
     <NavBar/>
     <Search/>
     <Jobs/>
     <Value/>
     <Footer/>
     
    </div>
  )
}

export default App