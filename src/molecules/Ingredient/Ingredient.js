import React from 'react';
import './Ingredient.scss';
import ClearIcon from '@mui/icons-material/Clear';

export const Ingredient = (props) => {
  const { ingredients } = props;
  return (
    <div className='overallContainer'>
      <h2>Ingredients:</h2>
      <div className='container'>
        <table className='ingredientTable'>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Serves</th>
            </tr>
            {ingredients.map((ingredient, idx) => (
              <tr key={idx}>
                <td>{ingredient.name}</td>
                <td>${ingredient.price}</td>
                <td>{ingredient.serves}</td>
                <td>
                  <ClearIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
