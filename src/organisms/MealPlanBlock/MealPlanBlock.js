import DeleteIcon from '@mui/icons-material/Delete';
import './MealPlanBlock.scss';

export const MealPlanBlock = (props) => {
  const { setRecipesSelected, onClickHandler, idx, day } = props;
  
  const dayCost = props.recipesSelected.reduce(
    (total, item) => total + item.cost,
    0
  );

  
  return (
    <div className='mealPlanBlock'>
      <div className='dayTrashDiv'>
        <p className='day'> {day}</p>
        <DeleteIcon
          className='trashBin'
          onClick={() =>
            setRecipesSelected((prev) => {
              prev[idx] = [{ cost: 0, name: '' }];
              return [...prev];
            })
          }
        />
      </div>
      {props.recipesSelected.map((item) => {
        return <p>{item.name}</p>;
      })}
      <p>Cost: ${dayCost}</p>
      <p className="addMore" onClick={() => onClickHandler(idx)}>Add More</p>
    </div>
  );
};
