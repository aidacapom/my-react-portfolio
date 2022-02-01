import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={ <Home /> } />
      </Routes>
    </>
  );
}

export default App;
