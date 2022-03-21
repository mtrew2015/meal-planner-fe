import React, { useState, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import {
  useRecipesLazyQuery,
  useCreateMealPlanMutation,
} from '../../generated/graphql.tsx';
import {weekState} from '../../store/index';
import {useRecoilState} from 'recoil';

import { useNavigate } from 'react-router-dom';

export const useMealPlanForm = () => {
  const [
    createMealPlanMutation,
    { data: mealPlanData, loading: mealPlanDataLoading, error,},
  ] = useCreateMealPlanMutation({});

  const navigate = useNavigate();
  const [week, setWeek] = useRecoilState(weekState)

  const [dialogOpen, setDialogOpen] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [totalCost, setTotalCost] = useState(0.0);

  const [getRecipes, { loading, data }] = useRecipesLazyQuery();

  const [daySelected, setDaySelected] = useState('');

  const [recipesSelected, setRecipesSelected] = useState([
    [{ name: '', cost: 0 }],
    [{ name: '', cost: 0 }],
    [{ name: '', cost: 0 }],
    [{ name: '', cost: 0 }],
    [{ name: '', cost: 0 }],
    [{ name: '', cost: 0 }],
    [{ name: '', cost: 0 }],
  ]);

  const isEnabled = useMemo(() => {
    for (let i = 0; i < recipesSelected.length; i++) {
      if (recipesSelected[i].name === '') {
        return false;
      }
    }
    return true;
  }, [recipesSelected]);

  useEffect(() => {
    const values = Object.values(recipesSelected);
    const mapped = values.map((day) => day.map((item) => item.cost));
    const cost = mapped.reduce((total, item) => total + Number(item), 0);
    setTotalCost(cost);
  }, [recipesSelected]);

  const onClickHandler = async (idx) => {
    setDaySelected(idx);
    if (!recipes.length) {
      await getRecipes().then((res) => setRecipes(res?.data?.recipes));
    }
    setDialogOpen(true);
  };

  const onSubmit = (data) => {
    const eachDay = recipesSelected.map((day) => {
      const idsOfEachDay = day.map((recipe) => (recipe._id ? recipe._id : ''));
      return { recipesSelected: idsOfEachDay };
    });
    const payload = {
      name: data.name,
      entrees: eachDay,
      weekNumber: Number(week),
      userId: '622b9ae5f483a18c21ab550d',
    };

    createMealPlanMutation({
      variables: {
        payload: payload,
      },
    });

    navigate('/');
  };

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

  return {
    daysOfWeek,
    register,
    handleSubmit,
    dialogOpen,
    setDialogOpen,
    onSubmit,
    totalCost,
    daySelected,
    onClickHandler,
    recipesSelected,
    setRecipesSelected,
    recipes,
    isEnabled,
  };
};
