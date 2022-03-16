import React from 'react';
import { RecipeCard } from '../RecipeCard/RecipeCard';
import {Paper} from '@mui/material'
import './RecipeCardContainer.scss'

export const RecipeCardContainer = (props) => {
  const [...recipes] = props.recipes;

  return (
    <Paper className="cardsContainer">
      {recipes.map((recipe, idx) => {
        return <RecipeCard recipe={recipe} idx={idx} />;
      })}
    </Paper>
  );
};
