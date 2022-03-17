import React, { useState } from 'react';
import { NavContainer } from './NavBar.styles';
import { Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SideBar from '../SideBar/SideBar';
import './NavBar.scss';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {useRecoilState} from 'recoil'
import {dateState, weekState} from '../../store/index'
import {getWeekOfYear} from '../../util/dateHelpers'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useRecoilState(dateState)
  const [week, setWeek] = useRecoilState(weekState)
  const [showCalendar, setShowCalendar] = useState(false);

  const handleChange = (newValue) => {
    setValue(newValue)
    setWeek(getWeekOfYear(newValue))
  };

  return (
    <NavContainer>
      <MenuIcon onClick={() => setOpen(true)} fontSize='large' />
      <div className='justifyCenter'>
      {!showCalendar && (
          <CalendarMonthIcon onClick={() => setShowCalendar(!showCalendar)} />
        )}

      {showCalendar && (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              inputFormat='MM/dd/yyyy'
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        )}
      </div>
      <div>
        <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
          <SideBar />
        </Drawer>
      </div>
    </NavContainer>
  );
};
