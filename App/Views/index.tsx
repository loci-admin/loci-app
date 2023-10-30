import React from 'react';

import { StyleSheet } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TabBar, TabBarProps, Tab, Text, TextProps } from '@ui-kitten/components';

import { TopTab } from '@/Navigation';

import Home from './Home';
import Search from './Search';

const styles = StyleSheet.create({
  Indicator: {
    borderColor: 'rgba(0, 0, 0, 1)',
  } satisfies TabBarProps['indicatorStyle'],
  TabBar: {},
  Tab: {
    color: 'rgba(0, 0, 0, 1)',
  } satisfies TextProps['style'],
});

const Tabs = ({ navigation, state }) => {
  const onSelect: TabBarProps['onSelect'] = (index) => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <TabBar
      selectedIndex={state.index}
      onSelect={onSelect}
      indicatorStyle={styles.Indicator}
    >
      <Tab title={({ style }) => {
        return <Text style={{ ...style, ...styles.Tab }}>home</Text>;
      }} />
      <Tab title={({ style }) => {
        return <Text style={{ ...style, ...styles.Tab }}>search</Text>;
      }} />
    </TabBar>
  );
}

function Views () {
  const insets = useSafeAreaInsets();

  const style = { ...styles.TabBar, top: insets.top };
  
  return (
    <TopTab.Navigator
      style={style}
      tabBar={Tabs}
    >
      {Home}
      {Search}
    </TopTab.Navigator>
  );;
}

export default Views;
