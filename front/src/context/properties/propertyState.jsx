import React, { useReducer } from 'react';

import propertyContext from './propertyContext';
import propertyReducer from './propertyReducer';

import { GET_PROPERTIES, CREATE_PROPERTY, ERROR_PROPERTY } from '../../types';

import { axiosClient } from '../../helpers';

const PropertyState = (props) => {
  const initialState = {
    properties: [],
    property: null,
    msg: null,
  };

  const [state, dispatch] = useReducer(propertyReducer, initialState);

  const getProperties = async () => {
    try {
      const response = await axiosClient.get('/api/properties');

      dispatch({
        type: GET_PROPERTIES,
        payload: response.data.properties,
      });
    } catch (error) {
      const alert = {
        msg: 'There was a mistake',
        category: 'error',
      };

      dispatch({
        type: ERROR_PROPERTY,
        payload: alert,
      });
    }
  };

  const createProperty = async (property) => {
    try {
      const response = await axiosClient.post('/api/properties', property);

      dispatch({
        type: CREATE_PROPERTY,
        payload: response.data,
      });
    } catch (error) {
      const alert = {
        msg: 'There was a mistake',
        categoria: 'error',
      };

      dispatch({
        type: ERROR_PROPERTY,
        payload: alert,
      });
    }
  };

  return (
    <propertyContext.Provider
      value={{
        properties: state.properties,
        msg: state.msg,
        property: state.property,
        getProperties,
        createProperty,
      }}>
      {props.children}
    </propertyContext.Provider>
  );
};

export default PropertyState;
