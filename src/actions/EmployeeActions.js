import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './type';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
}

export const employeeCreate = ({ name, phone, shift }) => {
  return {
    type: EMPLOYEE_CREATE,
    payload: { name, phone, shift }
  };
}
