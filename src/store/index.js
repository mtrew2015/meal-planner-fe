import {atom} from 'recoil';
import {getWeekOfYear} from '../util/dateHelpers'


export const weekState = atom({
  key: 'weekState', 
  default: getWeekOfYear()
})

export const dateState = atom({
  key: 'dateState',
  default: new Date()
})