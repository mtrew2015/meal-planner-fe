import DeleteIcon from '@mui/icons-material/Delete';
import '../MealPlan/MealPlan.scss';

export const MealPlanBlockView = (props) => {
  const { idx } = props;

  const dayMap = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const costMap = props.recipesSelected.map((item) => {
    return {
      cost: item.ingredients.reduce(
        (acc, ingredient) => acc + Number(ingredient.price),
        0
      ),
    };
  });

  const dayCost = costMap.reduce((total, item) => total + item.cost, 0);

  return (
    <div className='mealPlanBlock'>
      <div className='dayTrashDiv'>
        <p className='day'> {dayMap[idx]}</p>
      </div>
      {props.recipesSelected.map((item) => {
        return <p>{item.name}</p>;
      })}
      <p>Cost: ${dayCost}</p>
    </div>
  );
};
