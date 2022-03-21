import { useRecipeList } from './useRecipeList';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RecipeListCard } from '../RecipeListCard';

export const RecipeList = () => {
  const { recipes } = useRecipeList();
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recipes &&
              recipes.map((recipe) => <RecipeListCard key={recipe._id} recipe={recipe} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
