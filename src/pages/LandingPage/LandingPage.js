import React from 'react';
import { getWeekOfYear } from '../../util/dateHelpers';
import { useLandingPage } from '../LandingPage/useLandingPage';
import { MealPlan } from '../../organisms/MealPlan/MealPlan';
export const LandingPage = () => {
  const { mealPlanData } = useLandingPage();

  if (mealPlanData?.mealPlans?.length) {
    return (
      <div>
        LandingPage
        {mealPlanData?.mealPlans?.length && <MealPlan data={mealPlanData} />}
      </div>
    );
  } else {
    return <div>Create a mealPlan</div>;
  }
};
