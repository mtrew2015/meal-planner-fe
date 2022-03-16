import React, { useState } from 'react';

import { useLandingPage } from '../LandingPage/useLandingPage';
import { MealPlan } from '../../organisms/MealPlan/MealPlan';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { MealPlanForm } from '../../organisms/MealPlanForm/MealPlanForm';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const LandingPage = () => {
  const { mealPlanData, value, handleChange, week } = useLandingPage();
  const [showCalendar, setShowCalendar] = useState(false);

  if (mealPlanData?.mealPlans?.length) {
    return (
      <div>
        {!showCalendar && (
          <CalendarMonthIcon onClick={() => setShowCalendar(!showCalendar)} />
        )}

        {showCalendar && (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              inputFormat='MM/dd/yyyy'
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        )}
        {mealPlanData?.mealPlans?.length && <MealPlan data={mealPlanData} />}
      </div>
    );
  } else {
    return (
      <>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            inputFormat='MM/dd/yyyy'
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <MealPlanForm week={week} />
      </>
    );
  }
};
