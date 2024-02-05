import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomeScreen from './screen/HomeScreen'
import AboutScreen from './screen/AboutScreen'
import ContactScreen from './screen/ContactScreen'
import SingleCocktailScreen from './screen/SingleCocktailScreen'
import ErrorScreen from './screen/ErrorScreen';
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' exact Component={HomeScreen} />
        <Route path='/about' Component={AboutScreen} />
        <Route path='/contact' Component={ContactScreen} />
        <Route path='/cocktail/:id' Component={SingleCocktailScreen} />
        <Route path='*' Component={ErrorScreen} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
