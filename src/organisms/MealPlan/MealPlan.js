import './MealPlan.scss'

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
  console.log(mealPlan);
  return (
    <div className="mealPlanViewContainer">
      {daysOfWeek.map((day, idx) => {
        return (
          <div className="mealPlanBlock">
            <h2>
              {day}: {mealPlan.recipesSelected[idx]?.name}
            </h2>
            <p>Cost: ${costMap[idx]?.cost.toFixed(2)} </p>
          </div>
        );
      })}
    </div>
  );
};
