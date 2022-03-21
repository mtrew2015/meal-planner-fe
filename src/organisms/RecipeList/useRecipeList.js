import React, { useState } from 'react';
import { useRecipesQuery } from '../../generated/graphql.tsx';

export const useRecipeList = () => {
  const { data, loading } = useRecipesQuery({});

  return {
    recipes: data?.recipes,
    loading,
  };
};
