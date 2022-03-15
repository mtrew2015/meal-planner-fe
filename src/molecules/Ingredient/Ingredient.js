import React from 'react';
import './Ingredient.scss';
import ClearIcon from '@mui/icons-material/Clear';

export const Ingredient = (props) => {
  const { ingredients } = props;
  return (
    <div className="overallContainer">
      <h2>Ingredients:</h2>
      <div className='container'>
        <table className='ingredientTable'>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Serves</th>
          </tr>
          {ingredients.map((ingredient) => (
            <tr>
              <td>{ingredient.name}</td>
              <td>${ingredient.price}</td>
              <td>{ingredient.serves}</td>
              <td>
                <ClearIcon />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
