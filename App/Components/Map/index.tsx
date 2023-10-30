import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import { Layout } from '@ui-kitten/components';

import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken('pk.eyJ1IjoibG9jaS1hZG1pbiIsImEiOiJjbGt1bG1odzkwODJnM2VxYjhnbGhrcno1In0.7lGti4RTC9U8mFN1cyHfqw');
MapboxGL.setConnected?.(true);
MapboxGL.setWellKnownTileServer(MapboxGL.TileServers.Mapbox);

const styles = StyleSheet.create({
  map: {
    flex: 1,
    minWidth: 430,
  }
});

function Map() {
  useEffect(
    () => {
      MapboxGL.setTelemetryEnabled(false);
    }
  );

  return (
    <Layout>
      <MapboxGL.MapView
        projection='globe'
        style={styles.map}
        styleURL='mapbox://styles/loci-admin/clkulzxpg000f01rd1luz0zgd'
      />
    </Layout>
  );
}

export default Map;
