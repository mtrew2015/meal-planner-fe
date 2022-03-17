import { Container } from './App.styles';
import { NavBar } from './organisms/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom/';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { CreateRecipe } from './organisms/CreateRecipe/CreateRecipe';
import { RecipeList } from './organisms/RecipeList/RecipeList';
import {getWeekOfYear} from './util/dateHelpers';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Container>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/createRecipe' element={<CreateRecipe />} />
          <Route exact path='/recipes' element={<RecipeList />} />
        </Routes>
      </Container>
    </RecoilRoot>
  );
}

export default App;
