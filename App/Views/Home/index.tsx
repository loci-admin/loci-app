import React from 'react';

import { Layout, LayoutProps, Text } from '@ui-kitten/components';

import { BottomTab } from '@/Navigation';

const PATH = 'Home';

const styles = {
  Layout: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  } satisfies LayoutProps['style']
}

const Home = () => {
  return (
    <Layout level='1' style={styles.Layout}>
      <Text category='h1'>
        Home
      </Text>
    </Layout>
  );
}

export default (
  <BottomTab.Screen name={PATH} component={Home} />
);
