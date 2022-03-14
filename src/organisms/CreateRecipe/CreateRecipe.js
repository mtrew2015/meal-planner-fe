import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Dialog } from '@mui/material';
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
  const [showModal, setShowModal] = useState(false, true);
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
    setShowModal(false);
  };
  return (
    <div className='createFormContainer'>
      <h1>Create Recipe</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} required placeholder='Recipe Name' />
        <input
          {...register('linkToRecipe')}
          required
          placeholder='Link To Recipe'
        />
        <input {...register('serves')} required placeholder='Serves' />

        <div className='ingredientsContainer'>
          <Button onClick={() => setShowModal(true)}>Add New Ingredient</Button>
          <Dialog
            className='ingredientModal'
            open={showModal}
            onClose={() => setShowModal(false)}
          >
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
          </Dialog>
          <h2>Ingredients:</h2>
          {ingredients.length ? <Ingredient ingredients={ingredients} /> : ''}
        </div>

        <input className='submitButton' type='submit' />
      </form>
    </div>
  );
};
