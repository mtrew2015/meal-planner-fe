import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const useCreateRecipe = () => {

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


  return {
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
    onSubmit
  }

}