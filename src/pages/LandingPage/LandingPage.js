import React, { useState } from 'react';

import { useLandingPage } from '../LandingPage/useLandingPage';
import { MealPlan } from '../../organisms/MealPlan/MealPlan';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { MealPlanForm } from '../../organisms/MealPlanForm/MealPlanForm';
import {TextField} from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


export const LandingPage = () => {
  const { mealPlanData, value, handleChange, week } = useLandingPage();
  
  if (mealPlanData?.mealPlans?.length) {
    return (
      <div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Select A Week"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
        LandingPage
        {mealPlanData?.mealPlans?.length && <MealPlan data={mealPlanData} />}
      </div>
    );
  } else {
    return <MealPlanForm week={week} />;
  }
};
