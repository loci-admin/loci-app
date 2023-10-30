import React, { useEffect, useState } from 'react';

import { ImageProps } from 'react-native';

import { Icon as Origin, IconProps } from '@ui-kitten/components';

type Props = IconProps<Partial<ImageProps>>;

function Icon (props: Props) {
  return (
    <Origin {...props} />
  );
}

export { Props };
export default Icon;