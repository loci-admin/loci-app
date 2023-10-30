import React from 'react';

import { Layout, LayoutProps } from '@ui-kitten/components';

import { BottomTab } from '@/Navigation';

import { Map } from '@/Components';

const PATH = 'search';

const styles = {
  Layout: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  } satisfies LayoutProps['style']
}

const Search = () => {
  return (
    <Layout level='1' style={styles.Layout}>
      <Map />
    </Layout>
  );
}

export default (
  <BottomTab.Screen name={PATH} component={Search} />
);
