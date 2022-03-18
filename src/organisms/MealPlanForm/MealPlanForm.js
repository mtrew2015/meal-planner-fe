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
    isEnabled,
  } = useMealPlanForm(week);

  return (
    <Paper className='mealPlanFormContainer'>
      <h1>Create Meal Plan</h1>
      <p className='cost'>Total Cost: ${totalCost.toFixed(2)} </p>

      <FormControl>
        <TextField
        className="mealPlanNameInput"
          placeholder='Meal Plan Name'
          {...register('name', { required: 'Name of meal plan is required' })}
        />
        {daysOfWeek.map((day, idx) => {
          if (recipesSelected[idx].name) {
            return (
              <div className='mealPlanBlock'>
                <div className='dayTrashDiv'>
                  <p className='day'> {day}</p>
                  <DeleteIcon
                    className='trashBin'
                    onClick={() =>
                      setRecipesSelected((prev) => {
                        prev[idx] = { cost: 0, name: '' };
                        return [...prev];
                      })
                    }
                  />
                </div>

                <p>{recipesSelected[idx]?.name}</p>
                <p>Cost: ${recipesSelected[idx]?.cost}</p>
              </div>
            );
          } else {
            return (
              <div className='mealPlanBlock'>
                <p className='day'>{day}: </p>
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
        <Button disabled={!isEnabled} onClick={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </FormControl>
    </Paper>
  );
};
