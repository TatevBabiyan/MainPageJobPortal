import React from 'react'
import NavBar from './Layout/NavBar'
import Section1 from './Components/Find/Post/Section1'
import CVBuilder from './Components/CVCreator/CVBuilder'
import Mobile from './Components/Mobile/Mobile'
import HowTo from './Components/HowTo/HowTo'
import Footer from './Layout/Footer'
import FeaturedJobs from './Components/Featured Jobs/FeaturedJobs'
import RunningLine from './Components/RunningLine/RunningLine'
import Header from './Components/Header/Header'

function App() {


  return (
    <>
    <NavBar />
    <Header />
    <div className='container'>
    <RunningLine />
    <FeaturedJobs />
    <Section1 />
    <CVBuilder />
    <Mobile />
    <HowTo />
    </div>
    <Footer />
    </>
  )
}

export default App
