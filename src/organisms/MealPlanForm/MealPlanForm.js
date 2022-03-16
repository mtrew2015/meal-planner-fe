import React, { useEffect, useState } from 'react';
import { Button, Dialog, Paper, TextField, FormControl } from '@mui/material';
import { useForm } from 'react-hook-form';
import { getWeekOfYear } from '../../util/dateHelpers';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  useRecipesLazyQuery,
  useCreateMealPlanMutation,
} from '../../generated/graphql.tsx';
import { RecipeCardContainer } from '../RecipeCardContainer/RecipeCardContainer';
import './MealPlanForm.scss';

export const MealPlanForm = (props) => {
  const {week} = props;
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

  const [
    createMealPlanMutation,
    { data: mealPlanData, loading: mealPlanDataLoading, error },
  ] = useCreateMealPlanMutation({});

  const [getRecipes, { loading, data }] = useRecipesLazyQuery();

  const [recipesSelected, setRecipesSelected] = useState([
    { name: '', cost: 0 },
    { name: '', cost: 0 },
    { name: '', cost: 0 },
    { name: '', cost: 0 },
    { name: '', cost: 0 },
    { name: '', cost: 0 },
    { name: '', cost: 0 },
  ]);
  const [daySelected, setDaySelected] = useState('');

  const [dialogOpen, setDialogOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  console.log(recipesSelected);

  const onSubmit = (data) => {
    console.log(data);
    const idsOfRecipesSelected = recipesSelected.map((item) => item._id ? item._id: '')
    const payload = {
      name: data.name,
      recipesSelected: idsOfRecipesSelected,
      weekNumber: Number(week),
      userId: '622b9ae5f483a18c21ab550d',
    };

    createMealPlanMutation({
      variables: {
        payload: payload,
      },
    });
  };

  const onClickHandler = async (idx) => {
    setDaySelected(idx);
    if (!recipes.length) {
      await getRecipes().then((res) => setRecipes(res?.data?.recipes));
    }
    setDialogOpen(true);
  };

  useEffect(() => {
    const values = Object.values(recipesSelected);
    const cost = values.reduce((total, item) => total + item.cost, 0);
    setTotalCost(cost);
  }, [recipesSelected]);

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
