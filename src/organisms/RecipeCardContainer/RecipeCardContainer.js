import React from 'react';
import { RecipeCard } from '../RecipeCard/RecipeCard';

export const RecipeCardContainer = (props) => {
  const [...recipes] = props.recipes;

  return (
    <div>
      {recipes.map((recipe, idx) => {
        return <RecipeCard recipe={recipe} idx={idx} />;
      })}
    </div>
  );
};
