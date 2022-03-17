import { RecipeCard } from '../RecipeCard/RecipeCard';
import { useRecipeList } from './useRecipeList';

export const RecipeList = () => {
  const { recipes, loading } = useRecipeList();
  return (
    <div>
      {recipes && recipes.map((recipe) => <RecipeCard recipe={recipe} />)}
    </div>
  );
};
