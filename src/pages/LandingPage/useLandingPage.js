import React, { useState } from 'react';
import { useMealPlansQuery } from '../../generated/graphql.tsx';
import { getWeekOfYear } from '../../util/dateHelpers';
import {useRecoilState, atom} from 'recoil'
import {weekState, dateState} from '../../store/index'

export const useLandingPage = () => {

  const [value, setValue] = useRecoilState(dateState)
  const [week, setWeek] = useRecoilState(weekState)
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
    fetchPolicy: "no-cache" 
  });




  return {
    mealPlanData,
    value,
    setValue,
    week
  };
};
