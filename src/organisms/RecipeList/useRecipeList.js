import React, { useState } from 'react';
import { useRecipesQuery } from '../../generated/graphql.tsx';

export const useRecipeList = () => {
  const { data, loading, error } = useRecipesQuery({});

  console.log(data)

  return {
    recipes: data?.recipes,
    loading,
  };
};
