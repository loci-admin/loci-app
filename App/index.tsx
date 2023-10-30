import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import { ApplicationProvider, IconRegistry, Layout } from '@ui-kitten/components';

import Navigation from '@/Navigation';

import Views from './Views';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <React.StrictMode>
      <Navigation>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <SafeAreaProvider>
            <Views />
            <StatusBar style='auto' />
          </SafeAreaProvider>
        </ApplicationProvider>
      </Navigation>
    </React.StrictMode>
  );
}
