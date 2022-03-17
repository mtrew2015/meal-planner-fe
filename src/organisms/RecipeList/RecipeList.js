import { RecipeCard } from '../RecipeCard/RecipeCard';
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
  const { recipes, loading } = useRecipeList();
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Edit</TableCell>
          </TableHead>
          {recipes &&
            recipes.map((recipe) => <RecipeListCard recipe={recipe} />)}
        </Table>
      </TableContainer>
    </div>
  );
};
