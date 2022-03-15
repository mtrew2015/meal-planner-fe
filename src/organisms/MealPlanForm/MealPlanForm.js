import React, {useState} from 'react'
import { Button, Dialog, Paper, TextField, FormControl } from '@mui/material';
import {useForm} from 'react-hook-form'
import {getWeekOfYear} from '../../util/dateHelpers'


export const MealPlanForm = () => {
  const week = getWeekOfYear()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const [dialogOpen, setDialogOpen] = useState(false)




  return (
    <Paper>
      <h1>Create Meal Plan</h1>
      <FormControl>
        <TextField placeholder="Meal Plan Name"/>
        <p>Week: {week}</p>
        <Button onClick={() => setDialogOpen(true)}>Select Recipes</Button>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>

        </Dialog>
      </FormControl>
    </Paper>
  )

}