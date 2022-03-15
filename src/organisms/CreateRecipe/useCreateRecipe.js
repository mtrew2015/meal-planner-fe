import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateRecipeMutation } from '../../generated/graphql.tsx';

export const useCreateRecipe = () => {
  const [createRecipeMutation, { data, loading, error }] =
    useCreateRecipeMutation({});

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
    const payload = {
      name: data.name,
      serves: Number(data.serves),
      ingredients: ingredients,
      linkToRecipe: data.linkToRecipe,
    };
    createRecipeMutation({
      variables: {
        payload: payload,
      },
    });
    console.log(data);
  };

  const addIngredient = (data) => {
    const ingredient = {
      name: ingredientName,
      price: Number(ingredientPrice),
      serves: Number(serves),
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
    onSubmit,
  };
};
