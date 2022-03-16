import React, { useState } from 'react';
import { useMealPlansQuery } from '../../generated/graphql.tsx';
import { getWeekOfYear } from '../../util/dateHelpers';

export const useLandingPage = () => {
  const [value, setValue] = React.useState(new Date());
  const [week, setWeek] = React.useState(getWeekOfYear());
  const {
    data: mealPlanData,
    loading,
    error,
  } = useMealPlansQuery({
    variables: {
      filters: {
        weekNumber: week,
      },
    },
  });



  const handleChange = (newValue) => {
    setValue(newValue)
    setWeek(getWeekOfYear(newValue))
  };


  return {
    mealPlanData,
    value,
    setValue,
    handleChange,
    week
  };
};
