import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import './CreateRecipe.scss';
import { Ingredient } from '../../molecules/Ingredient/Ingredient';

export const CreateRecipe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [numberOfIngredients, setNumberOfIngredients] = useState(5);
  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientPrice, setIngredientPrice] = useState('');
  const [serves, setServes] = useState('');
  const onSubmit = (data) => {
    console.log(data);
  };

  const addIngredient = (data) => {
    const ingredient = {
      name: ingredientName,
      price: ingredientPrice,
      serves: serves,
    };
    setIngredients((prev) => [...prev, ingredient]);
    setIngredientPrice('');
    setServes('');
    setIngredientName('');
  };
  return (
    <div className='createFormContainer'>
      <h1>Create Recipe</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder='Recipe Name' />
        <input {...register('linkToRecipe')} placeholder='Link To Recipe' />
        <input {...register('serves')} placeholder='Serves' />

        <div className='ingredientsContainer'>
          <h2>Ingredients:</h2>
          <div className='form' onSubmit={addIngredient}>
            <input
              value={ingredientName}
              onChange={(e) => setIngredientName(e.target.value)}
              placeholder='Ingredient'
            />
            <input
              value={serves}
              placeholder='serves'
              onChange={(e) => setServes(e.target.value)}
            />
            <input
              value={ingredientPrice}
              placeholder='Price'
              onChange={(e) => setIngredientPrice(e.target.value)}
            />
            <Button onClick={addIngredient} value='Add Ingredient'>
              Add Ingredient
            </Button>
          </div>
          {ingredients.length ?<Ingredient ingredients={ingredients} />: ''}
        </div>

        <input className='submitButton' type='submit' />
      </form>
    </div>
  );
};
