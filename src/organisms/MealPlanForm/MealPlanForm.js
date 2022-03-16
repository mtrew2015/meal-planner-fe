import React, { useEffect, useState } from 'react';
import { Button, Dialog, Paper, TextField, FormControl } from '@mui/material';

import { getWeekOfYear } from '../../util/dateHelpers';
import DeleteIcon from '@mui/icons-material/Delete';

import { RecipeCardContainer } from '../RecipeCardContainer/RecipeCardContainer';
import './MealPlanForm.scss';
import { useMealPlanForm } from './useMealPlanForm';

export const MealPlanForm = (props) => {
  const { week } = props;

  const {
    daysOfWeek,
    register,
    handleSubmit,
    dialogOpen,
    setDialogOpen,
    onSubmit,
    totalCost,
    daySelected,
    onClickHandler,
    recipesSelected,
    setRecipesSelected,
    recipes,
  } = useMealPlanForm(week);

  return (
    <Paper>
      <h1>Create Meal Plan</h1>
      <FormControl>
        <TextField
          placeholder='Meal Plan Name'
          {...register('name', { required: 'Name of meal plan is required' })}
        />
        <p>Week: {week}</p>
        <p>Total Cost: {totalCost} </p>
        Recipes Selected:
        {daysOfWeek.map((day, idx) => {
          if (recipesSelected[idx].name) {
            return (
              <div className='selectedMeal'>
                <p>
                  {day}: {recipesSelected[idx]?.name}
                </p>
                <p>Cost: ${recipesSelected[idx]?.cost}</p>
                <DeleteIcon
                  onClick={() =>
                    setRecipesSelected((prev) => {
                      prev[idx] = { cost: 0, name: '' };
                      return [...prev];
                    })
                  }
                />
              </div>
            );
          } else {
            return (
              <div>
                {day}:{' '}
                <Button onClick={() => onClickHandler(idx)}>
                  Select Recipe
                </Button>
              </div>
            );
          }
        })}
        <Dialog
          className='recipeCardDialog'
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
        >
          <RecipeCardContainer
            setDialogOpen={setDialogOpen}
            recipes={recipes}
            daySelected={daySelected}
            setRecipesSelected={setRecipesSelected}
          />
        </Dialog>
        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </FormControl>
    </Paper>
  );
};
