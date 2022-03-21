import './MealPlan.scss';
import {MealPlanBlockView} from '../MealPlanBlockView/MealPlanBlockView'
import _ from 'lodash';

export const MealPlan = (props) => {
  const mealPlan = props?.data?.mealPlans[0];
  console.log(mealPlan);
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];


  const flatMapped = mealPlan.entrees.map((day) => {
    return day.recipesSelected.map((entree) => entree)
  })
  const flattened = _.flattenDeep(flatMapped);
  const costMap = flattened.map((item) => {
    return {
      cost: item.ingredients.reduce(
        (acc, ingredient) => acc + Number(ingredient.price),
        0
      ),
    };
  });
  const weekCost = costMap.reduce((total, item) => total + item.cost, 0);
;

  return (
    <div className='mealPlanViewContainer'>
      <h1>Menu</h1>
      {mealPlan.entrees.map((day, idx) => {
         return <MealPlanBlockView recipesSelected={day?.recipesSelected} idx={idx}/> 
      })}
      <p className='cost'>Total Cost: ${weekCost.toFixed(2)} </p>
    </div>
  );
};
