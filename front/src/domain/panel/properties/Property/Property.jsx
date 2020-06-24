import React from 'react';
// import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';

// import propertyContext from '../../../../context/properties/propertyContext';

import { Tabs } from '../../../../common/components/Tabs';
import { GeneralData } from './GeneralData';

const TabBar = styled.nav`
  display: flex;
  flex-flow: row wrap;
  margin: 2em;
  margin-bottom: 0;
`;

const TabPanelWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 2em;
  margin: 2em;
  margin-top: 0;
  background-color: white;
`;

function Property() {
  // const [property, setProperty] = useState({
  //   rooms: '',
  //   bathrooms: '',
  //   capacity: '',
  //   toilet: '',
  //   seaViews: '',
  //   beachDistance: '',
  //   orientation: '',
  //   patio: '',
  //   parking: '',
  //   storageRoom: '',
  //   petsFriendly: '',
  //   furnished: '',
  //   cabinets: '',
  //   cuisineType: '',
  //   openKitchen: '',
  //   warmWater: '',
  //   warmWaterType: '',
  //   heating: '',
  //   dishwasher: '',
  //   microwaves: '',
  //   clothesLine: '',
  //   oven: '',
  //   communityFee: '',
  //   floorsBuilding: '',
  //   constructionYear: '',
  //   elevator: '',
  //   garden: '',
  //   swimmingPool: '',
  //   bigQuilt: '',
  //   smallQuilt: '',
  //   bigSheet: '',
  //   smallSheet: '',
  //   bigPillow: '',
  //   smallPillow: '',
  //   bigTowel: '',
  //   smallTowel: '',
  // });

  return (
    <Tabs>
      <TabBar>
        <Tabs.Tab id='a'>Datos generales</Tabs.Tab>
        <Tabs.Tab id='b'>Datos específicos</Tabs.Tab>
        <Tabs.Tab id='c'>Equipamiento interior</Tabs.Tab>
        <Tabs.Tab id='d'>Comunidad</Tabs.Tab>
        <Tabs.Tab id='e'>Alquiler temporal</Tabs.Tab>
        <Tabs.Tab id='f'>Ropa de cama</Tabs.Tab>
        <Tabs.Tab id='g'>Propietario</Tabs.Tab>
        <Tabs.Tab id='h'>Alquiler temporal</Tabs.Tab>
        <Tabs.Tab id='i'>Observaciones</Tabs.Tab>
      </TabBar>
      <TabPanelWrapper>
        <Tabs.TabPanel id='a'>
          <GeneralData />
        </Tabs.TabPanel>
        <Tabs.TabPanel id='b'>Datos específicos</Tabs.TabPanel>
        <Tabs.TabPanel id='c'>Equipamiento interior</Tabs.TabPanel>
        <Tabs.TabPanel id='d'>Comunidad</Tabs.TabPanel>
        <Tabs.TabPanel id='e'>Alquiler temporal</Tabs.TabPanel>
        <Tabs.TabPanel id='f'>Ropa de cama</Tabs.TabPanel>
        <Tabs.TabPanel id='g'>Propietario</Tabs.TabPanel>
        <Tabs.TabPanel id='h'>Alquiler temporal</Tabs.TabPanel>
        <Tabs.TabPanel id='i'>Observaciones</Tabs.TabPanel>
      </TabPanelWrapper>
    </Tabs>
  );
}

export { Property };
