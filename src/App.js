import Home from './components/Home'
import Header from './components/Header'
import Projects from './components/Projects'
import Techs from './components/Techs'
import Contact from './components/Contact'
import Footer from './components/Footer'



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
    return(
            <div className='App'>
                  <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/skills' element={<Techs/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
                </Router>
              
                        
                <Footer/>

            {/* <Projects/>
            <Separator/>
            <Skills/>
            <Separator/>
            <Contact/>
            <Separator/>
            <Footer/> */}
            
            </div>
           
    )
}

export default App;