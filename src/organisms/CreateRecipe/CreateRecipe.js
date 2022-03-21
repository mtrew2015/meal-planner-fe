import React, { useState } from 'react';
import { Button, Dialog, Paper, TextField, FormControl } from '@mui/material';
import './CreateRecipe.scss';
import { Ingredient } from '../../molecules/Ingredient/Ingredient';
import { ErrorMessage } from '@hookform/error-message';
import { useCreateRecipe } from './useCreateRecipe';

export const CreateRecipe = () => {
  const {
    addIngredient,
    register,
    handleSubmit,
    errors,
    ingredientName,
    setIngredientName,
    ingredients,
    setIngredients,
    ingredientPrice,
    setIngredientPrice,
    serves,
    setServes,
    showModal,
    setShowModal,
    onSubmit,
  } = useCreateRecipe();

  return (
    <Paper>
      <FormControl className='createFormContainer'>
        <h1>Create Recipe</h1>
        <TextField
          {...register('name', { required: 'Name of recipe is required' })}
          placeholder='Recipe Name'
          className='textField'
        />
        <ErrorMessage errors={errors} name='name' />
        <TextField
          {...register('linkToRecipe', {
            required: 'Link to recipe is required',
          })}
          required
          placeholder='Link To Recipe'
          className='textField'
        />
         <TextField
          {...register('category', {
            required: 'category is required',
          })}
          required
          placeholder='Category'
          className='textField'
        />
        <ErrorMessage errors={errors} name='linkToRecipe' />
        <TextField
          {...register('serves', {
            required: 'Number recipe serves is required',
            pattern: /^[0-9]*$/
          })}
          placeholder='Serves'
          className='textField'
        />
        <ErrorMessage errors={errors} name='serves' />

        <div className='ingredientsContainer'>
          <Button onClick={() => setShowModal(true)}>Add New Ingredient</Button>
          <Dialog
            className='ingredientModal'
            open={showModal}
            onClose={() => setShowModal(false)}
          >
            <div className='form' onSubmit={addIngredient}>
              <TextField
                value={ingredientName}
                onChange={(e) => setIngredientName(e.target.value)}
                placeholder='Ingredient'
                className='textFieldModal'
              />
              <TextField
                value={serves}
                placeholder='serves'
                onChange={(e) => setServes(e.target.value)}
                className='textFieldModal'
              />
              <TextField
                value={ingredientPrice}
                placeholder='Price'
                onChange={(e) => setIngredientPrice(e.target.value)}
                className='textFieldModal'
              />
              <Button onClick={addIngredient} value='Add Ingredient'>
                Add Ingredient
              </Button>
            </div>
          </Dialog>

          {ingredients.length ? <Ingredient ingredients={ingredients} /> : ''}
        </div>

        <Button
          onClick={handleSubmit(onSubmit)}
          className='submitButton'
          type='submit'
          disabled={!errors}
        >
          Submit
        </Button>
      </FormControl>
    </Paper>
  );
};
