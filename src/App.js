import { Container } from './App.styles';
import { NavBar } from './organisms/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom/';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { CreateRecipe } from './organisms/CreateRecipe/CreateRecipe';

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/createRecipe' element={<CreateRecipe />} />
      </Routes>
    </Container>
  );
}

export default App;
