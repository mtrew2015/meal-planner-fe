import React, { useState, useEffect } from 'react';
import './LandingPage.scss';

import { useLandingPage } from '../LandingPage/useLandingPage';
import { MealPlan } from '../../organisms/MealPlan/MealPlan';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { MealPlanForm } from '../../organisms/MealPlanForm/MealPlanForm';
import { Button } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
  const { mealPlanData, value, handleChange, week } = useLandingPage();
  const navigate = useNavigate();
  const [showCalendar, setShowCalendar] = useState(false);

  if (mealPlanData?.mealPlans?.length) {
    return (
      <div className='landingContainer'>
        {mealPlanData?.mealPlans?.length && <MealPlan data={mealPlanData} />}
      </div>
    );
  } else {
    return <Button onClick={() => navigate('/createWeek')}>Create Week</Button>;
  }
};
