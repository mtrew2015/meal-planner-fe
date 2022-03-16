import React from 'react';
import { Card, CardActionArea } from '@mui/material';
import './RecipeCard.scss';

export const RecipeCard = (props) => {
  const { recipe } = props;
  const cost = recipe.ingredients?.reduce(
    (acc, ingredient) => acc + Number(ingredient.price),
    0
  );
  return (
    <Card className='recipeCard'>
      <CardActionArea>
        <h2>{recipe.name}</h2>
        <p>{recipe.linkToRecipe}</p>
        <p>Serves:{recipe.serves}</p>
        <p>Cost: ${cost}</p>
      </CardActionArea>
    </Card>
  );
};
