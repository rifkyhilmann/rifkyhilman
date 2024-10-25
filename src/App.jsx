import './App.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { UserProvider } from './Providers/userContext'
import Home from './pages/Home'
import FirstPages from './pages/FirstPages'
import Project from './pages/Projects'
import Journey from './pages/Journey'
import AboutMe from './pages/AboutMe'
import Skills from './pages/Skills'
import Project1 from './pages/Projects/Project1'
import Project2 from './pages/Projects/Project2'

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
            <Route path='/' element={<FirstPages />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Project' element={<Project />} />
            <Route path='/Journey' element={<Journey />} />
            <Route path='/Skills' element={<Skills />} />
            <Route path='/AboutMe' element={<AboutMe />} />
            <Route path='/Project/1' element={<Project1 />} />
            <Route path='/Project/2' element={<Project2 />} />
        </Routes>
      </UserProvider>
    </Router>
  )
}

export default App
