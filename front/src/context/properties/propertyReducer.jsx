import { GET_PROPERTIES, CREATE_PROPERTY } from '../../types';

export default (state, action) => {
  switch (action.type) {
    case GET_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
      };
    case CREATE_PROPERTY:
      return {
        ...state,
        properties: [...state.properties, action.payload],
      };
    default:
      return state;
  }
};
