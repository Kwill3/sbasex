import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/styles.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Destination from './routes/Destination';
import Crew from './routes/Crew';
import Technology from './routes/Technology';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/sbasex/' element={<Home />} />
          <Route path='/sbasex/destination' element={<Destination />} />
          <Route path='/sbasex/crew' element={<Crew />} />
          <Route path='/sbasex/technology' element={<Technology />} />
          <Route 
            path='/sbasex/*' 
            element={
              <main style={{ color: "white" }}>
                <p>404 Page Not Found</p>
              </main>
            } 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;