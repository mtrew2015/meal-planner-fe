import {getWeek} from 'date-fns'

export const getWeekOfYear = (value) => {
  let currentdate = new Date();
  if(value){
    currentdate = value
  }
  const result = getWeek(currentdate)
  console.log(
    `The week number of the current date (${currentdate}) is ${result}.`
  );

  return result
};
