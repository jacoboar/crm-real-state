import React, { useContext, useEffect } from 'react';

import propertyContext from '../../../context/properties/propertyContext';
import AlertContext from '../../../context/alerts/alertContext';

function PropertiesList() {
  const propertiesContext = useContext(propertyContext);
  const { msg, properties, getProperties } = propertiesContext;

  const alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;

  useEffect(() => {
    if (msg) {
      showAlert(msg.msg, msg.category);
    }

    getProperties();
    // eslint-disable-next-line
  }, [msg]);

  return (
    <table>
      <thead>
        <tr>
          <th>Referencia</th>
          <th>Nº habitaciones</th>
          <th>Tipo de inmueble</th>
          <th>Transacción</th>
          <th>Situación</th>
          <th>Localidad</th>
          <th>Precio web</th>
          <th>Precio oferta</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {properties.map((property) => (
          <tr key={property.ref}>
            <td>{property.ref}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export { PropertiesList };
