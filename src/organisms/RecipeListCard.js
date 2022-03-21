import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';

export const RecipeListCard = (props) => {
  const { recipe } = props;
  const cost = recipe.ingredients
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);
  return (
    <TableRow key={recipe.name}>
      <TableCell  scope='row'>
        {recipe.name}
      </TableCell>
      <TableCell>
        {recipe.category}
      </TableCell>
      <TableCell  scope='row'>
        ${cost}
      </TableCell>
      <TableCell>
        <EditIcon />
      </TableCell>
    </TableRow>
  );
};
