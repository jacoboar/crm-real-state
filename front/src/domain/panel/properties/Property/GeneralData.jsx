import React, { Fragment } from 'react';

import { TextInput } from '../../../../common/components/Form';

function GeneralData({ parentState, setParentState }) {
  console.log(parentState);

  return (
    <Fragment>
      <TextInput
        type={'text'}
        name={'ref'}
        label={'Referencia'}
        parentState={parentState}
        setParentState={setParentState}
      />
      <TextInput
        type={'text'}
        name={'address'}
        label={'Dirección'}
        parentState={parentState}
        setParentState={setParentState}
      />
    </Fragment>
  );
}

export { GeneralData };
