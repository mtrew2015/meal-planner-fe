import React, { useState } from 'react';
import { Button, Dialog, Paper, TextField, FormControl } from '@mui/material';
import { useForm } from 'react-hook-form';
import { getWeekOfYear } from '../../util/dateHelpers';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRecipesLazyQuery } from '../../generated/graphql.tsx';
import { RecipeCardContainer } from '../RecipeCardContainer/RecipeCardContainer';

export const MealPlanForm = () => {
  const week = getWeekOfYear();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const [getRecipes, { loading, data }] = useRecipesLazyQuery();

  const [recipesSelected, setRecipesSelected] = useState({
    Monday: { name: 'Mac and Cheese' },
    Tuesday: { name: 'Mac and Cheese' },
  });
  const [daySelected, setDaySelected] = useState('');

  const [dialogOpen, setDialogOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);

  console.log(recipes);

  const onClickHandler = async (day) => {
    setDaySelected(day);
    if (!recipes.length) {
      await getRecipes().then((res) => setRecipes(res?.data?.recipes));
    }
    setDialogOpen(true);
  };

  return (
    <Paper>
      <h1>Create Meal Plan</h1>
      <FormControl>
        <TextField placeholder='Meal Plan Name' />
        <p>Week: {week}</p>
        Recipes Selected:
        {daysOfWeek.map((day, idx) => {
          if (recipesSelected[day]) {
            return (
              <div>
                {day}: {recipesSelected[day].name}
                <DeleteIcon
                  onClick={() =>
                    setRecipesSelected((prev) => {
                      return { ...prev, [day]: '' };
                    })
                  }
                />
              </div>
            );
          } else {
            return (
              <div>
                {day}:{' '}
                <Button onClick={() => onClickHandler(day)}>
                  Select Recipe
                </Button>
              </div>
            );
          }
        })}
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <RecipeCardContainer recipes={recipes} />
        </Dialog>
      </FormControl>
    </Paper>
  );
};
