import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Dialog, Paper, TextField, FormControl } from '@mui/material';
import './CreateRecipe.scss';
import { Ingredient } from '../../molecules/Ingredient/Ingredient';

export const CreateRecipe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [ingredients, setIngredients] = useState([]);
  const [ingredientName, setIngredientName] = useState('');
  const [ingredientPrice, setIngredientPrice] = useState('');
  const [serves, setServes] = useState('');
  const [showModal, setShowModal] = useState(false, true);
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(errors);

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
    <Paper>
      <FormControl className='createFormContainer'>
        <h1>Create Recipe</h1>
        <TextField
          {...register('name')}
          required
          placeholder='Recipe Name'
          className='textField'
        />
        <TextField
          {...register('linkToRecipe')}
          required
          placeholder='Link To Recipe'
          className='textField'
        />
        <TextField
          {...register('serves')}
          required
          placeholder='Serves'
          className='textField'
        />

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
        >
          Submit
        </Button>
      </FormControl>
    </Paper>
  );
};
