import { Container } from './App.styles';
import { NavBar } from './organisms/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom/';
import { LandingPage } from './pages/LandingPage/LandingPage';

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
      </Routes>
    </Container>
  );
}

export default App;
