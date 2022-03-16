import React from 'react';
import { Card, CardActionArea } from '@mui/material';
import './RecipeCard.scss';

export const RecipeCard = (props) => {
  const { daySelected, setRecipesSelected, setDialogOpen } = props;
  const { recipe } = props;
  const cost = recipe.ingredients?.reduce(
    (acc, ingredient) => acc + Number(ingredient.price),
    0
  );

  const onClickHandler = () => {
    setRecipesSelected((prev) => {
      prev[daySelected] = { ...recipe, cost: cost };
      return [...prev];
    });
    setDialogOpen(false);
  };
  return (
    <Card className='recipeCard'>
      <CardActionArea onClick={onClickHandler}>
        <h2>{recipe.name}</h2>
        <p>{recipe.linkToRecipe}</p>
        <p>Serves:{recipe.serves}</p>
        <p>Cost: ${cost}</p>
      </CardActionArea>
    </Card>
  );
};
