import { CHANGE_SHAPE, RANDOM_SHAPE } from '../constants/actions';

export const changeShape = (name, value) => ({
  type: CHANGE_SHAPE,
  name,
  value
});

export const randomizeShape = () => ({
  type: RANDOM_SHAPE
});
