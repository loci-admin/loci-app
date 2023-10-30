import React from 'react';

import Generic from './Generic';

const Close: typeof Generic = (props) => {
  return (
    <Generic {...props} name='close' />
  );
}

export default Close;