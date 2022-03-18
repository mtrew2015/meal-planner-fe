import './MealPlan.scss';

export const MealPlan = (props) => {
  console.log(props);
  const mealPlan = props?.data?.mealPlans[0];
  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
 
  const costMap = mealPlan.recipesSelected.map((item) => {
    return {
      cost: item.ingredients.reduce(
        (acc, ingredient) => acc + Number(ingredient.price),
        0
      ),
    };
  });
  const totalCost = costMap.reduce((total, item) => {
    return total + item.cost
  }, 0)
  console.log(mealPlan);
  return (
    <div className='mealPlanViewContainer'>
      <h1>Menu</h1>
      <p className='cost'>Total Cost: ${totalCost.toFixed(2)} </p>
      {daysOfWeek.map((day, idx) => {
        return (
          <div className='mealPlanBlock'>
            <p className='day'>{day}</p>
            <p>{mealPlan.recipesSelected[idx]?.name}</p>
            <p>Cost: ${costMap[idx]?.cost.toFixed(2)} </p>
          </div>
        );
      })}
    </div>
  );
};
