import { CHANGE_SHAPE, RANDOM_SHAPE } from '../constants/actions';
import { createRandomShape } from '../services/shape';

const defaultState = createRandomShape();

export const shapeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SHAPE:
      return {
        ...state,
        [action.name]: action.value
      };
    case RANDOM_SHAPE: {
      return createRandomShape();
    }

    default:
      return state;
  }
};
