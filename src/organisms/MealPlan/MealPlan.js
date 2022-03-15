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
    <div>
      {daysOfWeek.map((day, idx) => {
        return (
          <div>
            <p>
              {day}: {mealPlan.recipesSelected[idx]?.name}
            </p>
            <p>Cost: {costMap[idx]?.cost} </p>
          </div>
        );
      })}
    </div>
  );
};
